import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CaracteristicasComponent } from './pages/caracteristicas/caracteristicas.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'acercade',component:AcercadeComponent},
  {path:'producto',component:ProductoComponent},
  {path:'caracteristicas',component:CaracteristicasComponent},
  {path:'pagos',component:PagosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'**',component:InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
