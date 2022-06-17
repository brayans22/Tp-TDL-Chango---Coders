import { Component } from '@angular/core';
import { IProducto } from '../Interfaces/IProducto';
import { CatalogoService } from '../Servicios/CatalogoServicio/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})

export class CatalogoComponent {
  
  get productos(): IProducto[] {
    return this.catalogoService.productos;
  }

  //Inyectando la dependencia del servicio catalogo.
  constructor(private catalogoService: CatalogoService) {}

}
