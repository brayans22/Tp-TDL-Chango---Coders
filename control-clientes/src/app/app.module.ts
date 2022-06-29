import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { SETTINGS as FirestoreSettingsToken } from '@angular/fire/compat/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FlashMessagesModule } from 'flash-messages-angular';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { ClienteServicio } from './servicios/cliente.service';
import { LoginService } from './servicios/login.service';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionServicio } from './servicios/configuracion.service';
import { ConfiguracionGuard } from './guardianes/configuracion.guard';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    PiePaginaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ClienteServicio, 
    LoginService, 
    AuthGuard, 
    ConfiguracionServicio, 
    ConfiguracionGuard,
    { provide: FirestoreSettingsToken, useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
