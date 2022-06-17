import { Injectable } from '@angular/core';
import { IProducto } from '../../Interfaces/IProducto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  
  productosCarrito: IProducto[] = [];

  get cantidadTotalProductosEnElCarrito(): number {
    return this.productosCarrito.length;
  }

  get precioTotalProductosCarrito(): number {
    return this.productosCarrito.reduce((precioTotal, { precio }) => ( precioTotal += precio), 0);
  }

  agregarProductoAlCarrito(productoNuevo : IProducto): void {
    this.productosCarrito = [...this.productosCarrito, productoNuevo];
  }

  BorrarProductoDelCarrito( productoEliminado: IProducto ): void {
    this.productosCarrito = this.productosCarrito.filter( 
      (productoEnElCarrito) => productoEliminado !== productoEnElCarrito 
    )

  }
}