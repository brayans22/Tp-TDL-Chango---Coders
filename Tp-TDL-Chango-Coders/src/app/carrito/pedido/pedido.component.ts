import { Component, OnInit } from '@angular/core';
import { IProducto } from '../../Interfaces/IProducto';
import { CarritoService } from '../../Servicios/CarritoServicio/carrito.servicio';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor( private servicioCarrito: CarritoService, private router: Router) {}

  ngOnInit(): void {}

  get productosCarrito(): IProducto[] {
    return this.servicioCarrito.productosCarrito;
  }

  get total(): number {
    return this.servicioCarrito.precioTotalProductosCarrito;
  }

  sacarProductoDelCarrito( productoAEliminar: IProducto): void {
    this.servicioCarrito.BorrarProductoDelCarrito(productoAEliminar);
  }

  irAlInicio(){
    this.router.navigate(['/inicio']);
  }

  irAlLogin(){
    this.router.navigate(['/login']);
  }

}