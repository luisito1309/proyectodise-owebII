import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { CaracteristicasComponent } from './pages/caracteristicas/caracteristicas.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercadeComponent,
    CaracteristicasComponent,
    ProductoComponent,
    NavbarComponent,
    FooterComponent,
    PagosComponent,
    CapitalizadoPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
