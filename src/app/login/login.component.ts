import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nombreUsuario: string = '';
  password: string = '';
  loggedIn: String | null ; 
  guardadoExitoso: boolean = false;
  mensajeGuardado : String =''
  
  constructor(private http: HttpClient, private router: Router) { 
    this.loggedIn = sessionStorage.getItem('login');
  }

  iniciarSesion() {
    const url = 'http://localhost:8080/auth/login'; // Reemplaza con la URL de tu API de autenticación
    const body = {
      nombreUsuario: this.nombreUsuario,
      password: this.password
    };
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(url, body, { headers }).subscribe(
      (response: any) => {
        // Manejar la respuesta de la API de autenticación
        console.log('Inicio de sesión exitoso', response);
        this.loggedIn = 'true';
        console.log('Inicio de sesión exitoso', response);
        sessionStorage.setItem('login', 'true'); // Guardar el nombre de usuario en el almacenamiento local
        sessionStorage.setItem('token', response.token); // Guardar el token de sesión en el almacenamiento local
        this.mensajeGuardado = "Exito: " + JSON.stringify(response)
        window.location.reload();

      },
      (error) => {
        // Manejar errores de la API de autenticación
        sessionStorage.setItem('login', 'false'); // Guardar el nombre de usuario en el almacenamiento local
        console.error('Error al iniciar sesión', error);
        this.mensajeGuardado = "Error: " + JSON.stringify(error)
      }
    );
  }
}
