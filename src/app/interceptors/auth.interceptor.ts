import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token2 = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY4NTkyNzIyOSwiZXhwIjoxNjg2Mjg3MjI5fQ.1WEoxGklifXEnEChHeLyVBpFWBn5a-2hZ56hCjUPsOYftnAYhPjAlL6fFu5opND7awnHx4wcObs5192d-m59Lw'; 
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    // Continúa con la solicitud clonada
    return next.handle(request);
  }
}
