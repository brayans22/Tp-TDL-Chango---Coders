import { Injectable } from '@angular/core';
import { ProductoComponent } from './productos/producto/producto.component';
import { Producto } from './modelos/producto.model';
import { DataServices } from './data.services';

@Injectable({
  providedIn: 'root'
})

export class ServicioProductosService {

  constructor( private dataService: DataServices ) {}


  listaProductos: Producto[] = [

    //Productos - Vegetales
    new Producto( 'Zanahoria', { precio: 200, tipoDeMoneda: 'ARS'}, 1, { nombre: 'Vegetal', descripcion: 'Producto de tipo vegetal' } ),
    new Producto( 'Papa', { precio: 200, tipoDeMoneda: 'ARS'}, 2, { nombre: 'Vegetal', descripcion: 'Producto de tipo vegetal' } ),
    new Producto( 'Zapallo', { precio: 200, tipoDeMoneda: 'ARS'}, 3, { nombre: 'Vegetal', descripcion: 'Producto de tipo vegetal' } ),
    new Producto( 'Cebolla', { precio: 200, tipoDeMoneda: 'ARS'}, 4, { nombre: 'Vegetal', descripcion: 'Producto de tipo vegetal' } ),

    //Productos - Frutas

    //Productos - Charcuteria

    //Productos - Fiambreria

    //Productos - Bebidas con alcohol

    //Productos - Bebidas sin alcohol

    //Productos - Congelados helados

    //Productos - Congelados comida

    //Productos - Golosinas

  ];

  public cargarListaProductos() : void {
    this.agregarProductoBaseDeDatos();
  }

  private agregarProductoBaseDeDatos() : void {
    this.dataService.guardarListaProductos( this.listaProductos );
  }

}