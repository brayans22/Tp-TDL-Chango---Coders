import { Component, OnInit, Input } from '@angular/core';
import { IProducto } from '../../Interfaces/IProducto';
import { CarritoService } from '../../Servicios/CarritoServicio/carrito.servicio';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  ngOnInit(): void {}

  @Input() 
  producto!: IProducto;

  constructor(private servicioCarrito: CarritoService) {}

  agregarProducto(): void {
    this.servicioCarrito.agregarProductoAlCarrito( this.producto );
  }

}