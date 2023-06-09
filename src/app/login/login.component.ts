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
  loggedIn: boolean = false; 
  guardadoExitoso: boolean = false;
  mensajeGuardado : String =''
  
  constructor(private http: HttpClient, private router: Router) { 

  }

  iniciarSesion() {
    const url = 'http://ec2-3-133-155-146.us-east-2.compute.amazonaws.com:8080/auth/login'; // Reemplaza con la URL de tu API de autenticación
    const body = {
      nombreUsuario: this.nombreUsuario,
      password: this.password
    };
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(url, body, { headers }).subscribe(
      (response: any) => {
        // Manejar la respuesta de la API de autenticación
        console.log('Inicio de sesión exitoso', response);
        this.loggedIn = true;
        console.log('Inicio de sesión exitoso', response);
        localStorage.setItem('login', 'true'); // Guardar el nombre de usuario en el almacenamiento local
        localStorage.setItem('token', response.token); // Guardar el token de sesión en el almacenamiento local
        this.router.navigate(['/']); // Redirigir a la página de dashboard después del inicio de sesión exitoso
        this.mensajeGuardado = "Exito: " + JSON.stringify(response)

      },
      (error) => {
        localStorage.setItem('login', 'false'); // Guardar el nombre de usuario en el almacenamiento local
        // Manejar errores de la API de autenticación
        console.error('Error al iniciar sesión', error);
        this.mensajeGuardado = "Error: " + JSON.stringify(error)
      }
    );
  }
}
