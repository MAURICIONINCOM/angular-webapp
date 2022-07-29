import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  
  constructor(private router: Router) {
  
  }

  ngOnInit(): void {}
  registrarProveedor() {
    this.router.navigate(["nuevo-proveedor"]);
  }
  ListarProveedor() {
    this.router.navigate(["listar-proveedores"]);
  }
}
