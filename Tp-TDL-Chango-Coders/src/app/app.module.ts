import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HeaderComponent } from './home/header/header.component'; 
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { DataServices } from './data.services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    InicioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
