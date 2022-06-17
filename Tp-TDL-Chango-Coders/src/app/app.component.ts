import { Component } from '@angular/core';

// Decorador del componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'Tp-TDL-Chango-Coders';

  carritoVisible = false;

  CambiarVisibilidadCarrito(): void {
    this.carritoVisible = !this.carritoVisible;
  }

}