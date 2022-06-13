import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { SedesComponent } from './sedes/sedes.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'', component:ProductosComponent},
  {path:'', component:OfertasComponent},
  {path:'', component:NosotrosComponent},
  {path:'', component:SedesComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
