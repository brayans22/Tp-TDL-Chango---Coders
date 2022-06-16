import { Component } from '@angular/core';
import { ServicioProductosService } from './servicio-productos.service';
import { Producto } from './modelos/producto.model';

// Decorador del componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'Tp-TDL-Chango-Coders';

  /*
    Inyectamos el servicio de productos en el componente principal (clase principal).
    La inyeccion de dependencias se hace desde el constructor o apartir del constructor
    En el caso de esta componente principal
  */
  constructor( private misProductos:ServicioProductosService){}

  productos: Producto[ ] = [ ];

  ngOnInit(): void {
    
  }


}