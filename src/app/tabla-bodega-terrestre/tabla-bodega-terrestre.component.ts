import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla-bodega-terrestre',
  templateUrl: './tabla-bodega-terrestre.component.html',
  styleUrls: ['./tabla-bodega-terrestre.component.css']
})
export class TablaBodegaTerrestreComponent implements OnInit {
  lugaresAlmacenamiento: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = 'http://ec2-3-133-155-146.us-east-2.compute.amazonaws.com:8080/api/lugar_almacenamiento'; // Reemplaza con la URL correcta de tu API REST para obtener la lista de bodegas terrestres

    this.http.get<any>(url).subscribe(
      response => {
        this.lugaresAlmacenamiento = response;
        console.log('Bodegas terrestres obtenidas exitosamente', this.lugaresAlmacenamiento);
        // Agrega aquí la lógica adicional que desees
      },
      error => {
        console.error('Error al obtener la lista de bodegas terrestres', error);
        // Agrega aquí la lógica adicional para manejar errores
      }
    );
  }
}
