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

  /* Metodo Get /facturacion */
  public getFacturas(){
    return this.http.get(`${this.baseUrl}/factura`);
  }
  /* Metodo Posts /facturacion */
  public postFactura(body: any){
    return this.http.post(`${this.baseUrl}/factura`,body);
  }
  /* Metodo Delete /facturacion */
  public deleteFactura(id: string) {
    return this.http.delete(`${this.baseUrl}/factura/${id}`);
  }
  /* Meotodo Patch /facturacion */
  public patchFactura(id: string,body: any){
    return this.http.patch(`${this.baseUrl}/factura/${id}`,body);
  }
  /* Metodo Get /facturacion/detalles */
  public getFacturasDetalles(){
    return this.http.get(`${this.baseUrl}/detalle`);
  }
  /* Metodo Posts /facturacion/detalles */
  public postFacturaDetalles(body: any){
    return this.http.post(`${this.baseUrl}/detalle`,body);
  }
  /* Metodo Delete /facturacion/detalles */
  public deleteFacturaDetalles(id: string) {
    return this.http.delete(`${this.baseUrl}/detalle/${id}`);
  }
  /* Meotodo Patch /facturacion/detalles */
  public patchFacturaDetalles(id: string,body: any){
    return this.http.patch(`${this.baseUrl}/detalle/${id}`,body);
  }

  /* getUsuarios() {
    return this.http.get(`${this.baseUrl}/factura`);
  } */
}
