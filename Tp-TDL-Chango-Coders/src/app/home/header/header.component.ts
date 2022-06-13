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

  irAProductos(){
    this.router.navigate(['/productos']);
  }

  irANosotros(){
    this.router.navigate(['/nosotros']);
  }

  irASedes(){
    this.router.navigate(['/sedes']);
  }

  irAOfertas(){
    this.router.navigate(['/ofertas']);
  }

}
