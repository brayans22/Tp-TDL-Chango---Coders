import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../Servicios/CarritoServicio/carrito.servicio';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  ngOnInit(): void {}

  constructor(private router: Router, private servicioCarrito: CarritoService) { }

  @Output() CambiarVisibilidadCarrito = new EventEmitter<void>();

  get cantidadProductosCarrito(): number {
    return this.servicioCarrito.cantidadTotalProductosEnElCarrito;
  }

  irAlCarrito(): void {
    this.router.navigate(['/carrito']);
  }

  irAlLogin(){
    this.router.navigate(['/login']);
  }

  irAlInicio(){
    this.router.navigate(['/inicio']);
  }

  irAProductos(){
    this.router.navigate(['/productos']);
  }

  irANosotros(){
    this.router.navigate(['/nosotros']);
  }

  irAOfertas(){
    this.router.navigate(['/ofertas']);
  }

  irASedes(){
    this.router.navigate(['/sedes']);
  }

}

  
