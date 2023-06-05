import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormCrearTipoProductoComponent } from './form-crear-tipo-producto/form-crear-tipo-producto.component';
import { FormCrearBodegaTerrestreComponent } from './form-crear-bodega-terrestre/form-crear-bodega-terrestre.component';
import { FormCrearClienteComponent } from './form-crear-cliente/form-crear-cliente.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { TablaPlanEntregaComponent } from './tabla-plan-entrega/tabla-plan-entrega.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { TablaBodegaTerrestreComponent } from './tabla-bodega-terrestre/tabla-bodega-terrestre.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { PlanEntregaMaritimaComponent } from './plan-entrega-maritima/plan-entrega-maritima.component';
import { FormCrearPlanEntregaMaritimaComponent } from './form-crear-plan-entrega-maritima/form-crear-plan-entrega-maritima.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavbarComponent,
    FormCrearTipoProductoComponent,
    FormCrearBodegaTerrestreComponent,
    FormCrearClienteComponent,
    TablaClientesComponent,
    TablaPlanEntregaComponent,
    TablaProductosComponent,
    TablaBodegaTerrestreComponent,
    PlanEntregaMaritimaComponent,
    FormCrearPlanEntregaMaritimaComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
