import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturacionComponent } from '../app/facturacion/facturacion.component';
import { DetallesComponent } from '../app/detalles/detalles.component';

const routes: Routes = [
  {path: 'facturacion', component: FacturacionComponent},
  {path: 'detalle', component: DetallesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
