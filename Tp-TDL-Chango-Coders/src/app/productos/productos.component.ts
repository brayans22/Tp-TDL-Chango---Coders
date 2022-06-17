import { Component, OnInit, Input } from '@angular/core';
import { IProducto } from '../Interfaces/IProducto';
import { CarritoService } from '../Servicios/CarritoServicio/carrito.servicio';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  ngOnInit(): void {}
  constructor(){}

  /*

  @Input() 
  producto!: IProducto;

  constructor(private servicioCarrito: CarritoService) {}

  agregarProducto(): void {
    this.servicioCarrito.agregarProductoAlCarrito( this.producto );
  }

  */

}