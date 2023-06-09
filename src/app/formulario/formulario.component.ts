import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Cliente {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  clientes: Cliente[] = [];
  tiposProductos: Cliente[] = [];
  bodegasTerrestres: Cliente[] = [];

  datosFormulario = {
    tipoProducto: null,
    cantidadProducto: null,
    fechaRegistro: null,
    fechaEntrega: null,
    bodegaEntrega: null,
    clienteId: null,
    precioEnvio: null,
    placaVehiculo: null
  };

  guardadoExitoso: boolean = false;
  mensajeGuardado : String =''


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerClientes();
  }

  cargarBodegasYTiposProductos(){
    this.obtenerTiposProducto();
    this.obtenerBodegas();
  }

  obtenerClientes() {
    const url = 'http://ec2-3-133-155-146.us-east-2.compute.amazonaws.com:8080/api/cliente'; // Reemplazar con la URL correcta de tu API REST para obtener la lista de clientes
    this.http.get<any>(url).subscribe(
      response => {
        this.clientes = response;
      },
      error => {
        console.error('Error al obtener la lista de clientes', error);
      }
    );
  }

  obtenerTiposProducto() {
    const url = 'http://ec2-3-133-155-146.us-east-2.compute.amazonaws.com:8080/api/tipo_producto/cliente/'+this.datosFormulario.clienteId+'/logistica/TERRESTRE'; // Reemplazar con la URL correcta de tu API REST para obtener la lista de clientes

    this.http.get<any>(url).subscribe(
      response => {
        this.tiposProductos = response;
      },
      error => {
        console.error('Error al obtener la lista de productos', error);
      }
    );
  }

  obtenerBodegas() {
    const url = 'http://ec2-3-133-155-146.us-east-2.compute.amazonaws.com:8080/api/lugar_almacenamiento/cliente/'+this.datosFormulario.clienteId+'/logistica/TERRESTRE'; // Reemplazar con la URL correcta de tu API REST para obtener la lista de clientes

    this.http.get<any>(url).subscribe(
      response => {
        this.bodegasTerrestres = response;
      },
      error => {
        console.error('Error al obtener la lista de bodegas', error);
        // Agregar aquí la lógica adicional para manejar errores
      }
    );
  }

  onSubmit() {
    this.http.post('http://ec2-3-133-155-146.us-east-2.compute.amazonaws.com:8080/api/planes-entrega-terrestre', this.datosFormulario)
      .subscribe(
        (response) => {
          console.log('Guardado exitoso');
          this.mensajeGuardado = "Exito: " + JSON.stringify(response)
        },
        (error) => {
          console.error('Error al guardar', error);
          this.mensajeGuardado = "ERROR: " + + JSON.stringify(error)
        }
      );  
  }
}
``
