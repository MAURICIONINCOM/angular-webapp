import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../proveedor/proveedor';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  private BASE_PATH = 'http://127.0.0.1:7000';
  constructor(private httpClient: HttpClient) {}

  obtenerListaProveedores(): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(
      `${this.BASE_PATH + '/api/proveedor/list'}`
    );
  }
  registrarProveedor(proveedor: Proveedor): Observable<Object> {
    return this.httpClient.post(
      `${this.BASE_PATH + '/api/proveedor/add'}`,
      proveedor
    );
  }
}
