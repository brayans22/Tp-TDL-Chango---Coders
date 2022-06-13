import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
