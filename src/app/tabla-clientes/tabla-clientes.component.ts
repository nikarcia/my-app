import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent implements OnInit {
  clientes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = 'http://ec2-3-133-155-146.us-east-2.compute.amazonaws.com:8080/api/cliente'; // Reemplaza con la URL correcta de tu API REST para obtener la lista de clientes

    this.http.get<any>(url).subscribe(
      response => {
        this.clientes = response;
        console.log('Clientes obtenidos exitosamente', this.clientes);
      },
      error => {
        console.error('Error al obtener la lista de clientes', error);
      }
    );
  }
}
