import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-plan-entrega-maritima',
  templateUrl: './plan-entrega-maritima.component.html',
  styleUrls: ['./plan-entrega-maritima.component.css']
})
export class PlanEntregaMaritimaComponent {
  planesEntrega: any[] = [];
  numeroGuia:any;
  cantidadProducto: any;
  fechaRegistro: any;
  fechaEntrega: any;
  precioEnvio: any;
  precioEnvioConDescuento: any;
  numeroFlota: any;
  tipoproducto: any;
  lugarAlmacenamiento: any;
  IdCliente: any;
  nombreCliente: any;
    constructor(private http: HttpClient) {}
  
    ngOnInit() {
      const url = 'http://ec2-3-133-155-146.us-east-2.compute.amazonaws.com:8080/api/planes-entrega-maritima'; // Reemplaza con la URL correcta de tu API REST para obtener la lista de planes de entrega
  
      this.http.get<any>(url).subscribe(
        response => {
          this.planesEntrega = response;
          console.log('Planes de entrega obtenidos exitosamente', this.planesEntrega);
        },
        error => {
          console.error('Error al obtener la lista de planes de entrega', error);
        }
      );
    }
  
    consultarPorFiltros() {
      // Crea los parámetros de consulta (query parameters)
      let params = new HttpParams();
      if (this.numeroGuia) {
        params = params.set('numeroGuia', this.numeroGuia);
      }
      if (this.cantidadProducto) {
        params = params.set('cantidadProducto', this.cantidadProducto);
      }
      if (this.fechaRegistro) {
        params = params.set('fechaRegistro', this.fechaRegistro);
      }
      if (this.fechaEntrega) {
        params = params.set('fechaEntrega', this.fechaEntrega);
      }
      if (this.precioEnvio) {
        params = params.set('precioEnvio', this.precioEnvio);
      }
      if (this.precioEnvioConDescuento) {
        params = params.set('precioEnvioConDescuento', this.precioEnvioConDescuento);
      }
      if (this.numeroFlota) {
        params = params.set('numeroFlota', this.numeroFlota);
      }
      if (this.tipoproducto) {
        params = params.set('tipoproducto', this.tipoproducto);
      }
      if (this.lugarAlmacenamiento) {
        params = params.set('lugarAlmacenamiento', this.lugarAlmacenamiento);
      }
      if (this.nombreCliente) {
        params = params.set('nombreCliente', this.nombreCliente);
      }
      if (this.IdCliente) {
        params = params.set('IdCliente', this.IdCliente);
      }
    
      // Realiza la petición HTTP GET con los parámetros de consulta
      this.http.get<any[]>('http://ec2-3-133-155-146.us-east-2.compute.amazonaws.com:8080/api/planes-entrega-maritima', { params }).subscribe(
        (data) => {
          // Aquí puedes manejar la respuesta del API
          console.log(data);
          this.planesEntrega = data;
        },
        (error) => {
          // Aquí puedes manejar el error en caso de que ocurra
          console.error(error);
        }
      );
    }
    
  

    
  }
  