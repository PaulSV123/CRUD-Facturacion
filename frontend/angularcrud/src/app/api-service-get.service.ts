import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceGetService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getFacturas(){
    return this.http.get(`${this.baseUrl}/factura`);
  }
  public postFactura(body: any){
    return this.http.post(`${this.baseUrl}/factura`,body);
  }
  public deleteFactura(id: string) {
    return this.http.delete(`${this.baseUrl}/factura/${id}`);
  }
  /* getUsuarios() {
    return this.http.get(`${this.baseUrl}/factura`);
  } */
}
