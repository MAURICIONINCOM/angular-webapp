import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoProveedorComponent } from './proveedor/nuevo/nuevo-proveedor.component';
import { ListarProveedoresComponent } from './proveedor/listar/listar-proveedores.component';

export const routes: Routes = [
  {
    path: 'nuevo-proveedor',
    component: NuevoProveedorComponent,
  },
  {
    path: 'listar-proveedores',
    component: ListarProveedoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [NuevoProveedorComponent,ListarProveedoresComponent];
