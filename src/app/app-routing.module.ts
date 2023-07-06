import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { TablaPlanEntregaComponent } from './tabla-plan-entrega/tabla-plan-entrega.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { TablaBodegaTerrestreComponent } from './tabla-bodega-terrestre/tabla-bodega-terrestre.component';
import { PlanEntregaMaritimaComponent } from './plan-entrega-maritima/plan-entrega-maritima.component';

const routes: Routes = [

  { path: 'clientes', component: TablaClientesComponent },
  { path: 'planes-entrega-terrestres', component: TablaPlanEntregaComponent },
  { path: 'planes-entrega-maritimas', component: PlanEntregaMaritimaComponent },
  { path: 'productos', component: TablaProductosComponent },
  { path: 'almacenamiento', component: TablaBodegaTerrestreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
