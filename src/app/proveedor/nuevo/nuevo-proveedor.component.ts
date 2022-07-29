import { ProveedorService } from './../../services/proveedor.service';
import { Proveedor } from './../proveedor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nuevoProveedor',
  templateUrl: './nuevo-proveedor.component.html',
})
export class NuevoProveedorComponent implements OnInit {
  proveedor: Proveedor = new Proveedor();
  constructor(private proveedorService:ProveedorService) {}

  ngOnInit(): void {}
  
  guardarProveedor(){
    this.proveedorService.registrarProveedor(this.proveedor).subscribe(dato =>{
        console.log(dato);
    },error => console.log(error));
  }
  onSubmit() {
    console.log(this.proveedor);
  }
}
