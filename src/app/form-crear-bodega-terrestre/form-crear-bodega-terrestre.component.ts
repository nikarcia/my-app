import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Cliente {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-form-crear-bodega-terrestre',
  templateUrl: './form-crear-bodega-terrestre.component.html',
  styleUrls: ['./form-crear-bodega-terrestre.component.css']
})
export class FormCrearBodegaTerrestreComponent {
  crearLugarAlmacenamientoRequest = {    
    nombre: null,
    logistica: null,
    clienteId: null,
    direccion:null
}
mensajeGuardado : String =''
logisticaOpciones : String[] = ["TERRESTRE" , "MARITIMA"]
clientes: Cliente[] = [];
guardadoExitoso: boolean = false;

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
        // Agregar aquí la lógica adicional para manejar errores
      }
    );
  }

  enviarDatos() {
    const url = 'http://localhost:8080/api/lugar_almacenamiento'; // Reemplazar con la URL correcta de tu API REST
    this.http.post(url,this.crearLugarAlmacenamientoRequest).subscribe
    (response => {
        console.log('Tipo de Producto creado exitosamente', response);
        this.guardadoExitoso=true
        this.mensajeGuardado = "Exito: " + JSON.stringify(response)
      },
      error => {
        console.error('Error al crear el Tipo de Producto', error);
        this.guardadoExitoso=true
        this.mensajeGuardado = "ERROR: " + error.error.mensaje
      }
    );
  }
}
