import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = 'http://localhost:8080/api/tipo_producto'; // Reemplaza con la URL correcta de tu API REST para obtener la lista de productos

    this.http.get<any>(url).subscribe(
      response => {
        this.productos = response;
        console.log('Productos obtenidos exitosamente', this.productos);
      },
      error => {
        console.error('Error al obtener la lista de productos', error);
      }
    );
  }
}
