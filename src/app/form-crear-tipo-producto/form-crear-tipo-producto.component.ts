import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Cliente {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-form-crear-tipo-producto',
  templateUrl: './form-crear-tipo-producto.component.html',
  styleUrls: ['./form-crear-tipo-producto.component.css']
})
export class FormCrearTipoProductoComponent implements OnInit {
  crearProductoRequest = {    
      nombre: null,
      logistica: null,
      clienteId: null
  }
  logisticaOpciones : String[] = ["TERRESTRE" , "MARITIMA"]
  clientes: Cliente[] = [];
  guardadoExitoso: boolean = false;
  mensajeGuardado : String =''

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    const url = 'http://localhost:8080/api/cliente'; // Reemplazar con la URL correcta de tu API REST para obtener la lista de clientes
    this.http.get<any>(url).subscribe(
      response => {
        this.clientes = response;
      },
      error => {
        console.error('Error al obtener la lista de clientes', error);
      }
    );
  }

  enviarDatos() {
    const url = 'http://localhost:8080/api/tipo_producto'; // Reemplazar con la URL correcta de tu API REST

    this.http.post(url, this.crearProductoRequest).subscribe(
      response => {
        console.log('Tipo de Producto creado exitosamente', response);
        this.mensajeGuardado = "Exito: " + JSON.stringify(response)
      },
      error => {
        console.error('Error al crear el Tipo de Producto', error);
        this.mensajeGuardado = "ERROR: " + error.error.mensaje

      }
    );
  }
}
