import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-crear-cliente',
  templateUrl: './form-crear-cliente.component.html',
  styleUrls: ['./form-crear-cliente.component.css']
})
export class FormCrearClienteComponent {
  nombre: string = '';
  guardadoExitoso: boolean = false;
  mensajeGuardado : String =''

  constructor(private http: HttpClient) {}

  @Output() actualizar = new EventEmitter<void>();


  enviarDatos() {
    const url = 'http://localhost:8080/api/cliente'; // Reemplaza con la URL correcta de tu API REST para crear un cliente

    const datos = {
      nombre: this.nombre
    };

    this.http.post(url, datos).subscribe(
      response => {
        console.log('Cliente creado exitosamente', response);
        this.mensajeGuardado = "Exito: " + JSON.stringify(response)
        this.actualizar.emit();

      },
      error => {
        console.error('Error al crear el cliente', error);
        this.mensajeGuardado = "ERROR: " + error.error.mensaje
      }
    );
  }
}
