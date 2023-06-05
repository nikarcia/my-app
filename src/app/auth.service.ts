import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'URL_DEL_API_DE_INICIO_DE_SESION';

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post<any>(this.loginUrl, credentials);
  }
}
