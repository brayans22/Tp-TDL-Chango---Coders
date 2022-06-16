import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Para poder hacer routing en la pagina web
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HeaderComponent } from './home/header/header.component'; 
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { DataServices } from './data.services';
import { ProductosComponent } from './productos/productos.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { SedesComponent } from './sedes/sedes.component';

// Para poder conectarme con FireBase
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Los servicios (las inyecciones de dependencia)
import { ServicioProductosService } from './servicio-productos.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    InicioComponent,
    HomeComponent,
    ProductosComponent,
    OfertasComponent,
    NosotrosComponent,
    SedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  /*
    agrego los servicios que estoy usando (La inyeccion de dependencias Inyectable)
    -> DataServices para conectarme con el servicio de base de datos firebase 
    -> ServicioProductosServices para conectarme con el servicio de los productos
  */
  providers: [DataServices, ServicioProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
