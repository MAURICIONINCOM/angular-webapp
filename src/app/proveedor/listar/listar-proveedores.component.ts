import { ProveedorService } from './../../services/proveedor.service';
import { Proveedor } from './../proveedor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listarProveedores',
  templateUrl: './listar-proveedores.component.html',
})
export class ListarProveedoresComponent implements OnInit {
  proveedores: Proveedor[];

  constructor(private proveedorService: ProveedorService) {}

  ngOnInit(): void {
    this.obtenerProveedores();
  }
  private obtenerProveedores() {
    this.proveedorService.obtenerListaProveedores().subscribe((dato) => {
      this.proveedores = dato;
    });
  }
}
