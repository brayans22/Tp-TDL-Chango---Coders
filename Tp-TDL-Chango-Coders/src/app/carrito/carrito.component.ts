import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { IProducto } from '../Interfaces/IProducto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {

  @Input() 
  productoAgregado!: IProducto;

  @Output() 
  productoEliminado = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  clickEnBotonEliminarProductoDelCarrito() : void {
    this.productoEliminado.emit();
  }

}
