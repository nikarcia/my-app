import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioComponent } from './formulario/formulario.component';
import { FormCrearTipoProductoComponent } from './form-crear-tipo-producto/form-crear-tipo-producto.component';
import { FormCrearBodegaTerrestreComponent } from './form-crear-bodega-terrestre/form-crear-bodega-terrestre.component';
import { FormCrearClienteComponent } from './form-crear-cliente/form-crear-cliente.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { TablaPlanEntregaComponent } from './tabla-plan-entrega/tabla-plan-entrega.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { TablaBodegaTerrestreComponent } from './tabla-bodega-terrestre/tabla-bodega-terrestre.component';
import { PlanEntregaMaritimaComponent } from './plan-entrega-maritima/plan-entrega-maritima.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  { path: 'clientes', component: TablaClientesComponent },
  { path: 'planes-entrega-terrestres', component: TablaPlanEntregaComponent },
  { path: 'planes-entrega-maritimas', component: PlanEntregaMaritimaComponent },
  { path: 'productos', component: TablaProductosComponent },
  { path: 'almacenamiento', component: TablaBodegaTerrestreComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
