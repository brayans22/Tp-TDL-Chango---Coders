import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  clientes: Cliente[] ;

  cliente: Cliente ={
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }
  
  id:string = '0';

  constructor(private clientesServicio: ClienteServicio,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute  
) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientesServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
        this.getCliente();
      }
    )
  }

  getCliente(): Cliente {
    for(let i = 0; this.clientes[i];i++){
      if(this.clientes[i].id == this.id){
        this.cliente = this.clientes[i];
      }
    }
    console.log(this.cliente);
    
    return this.cliente;
  }

  guardar({value, valid}: NgForm){
    if(!valid){
      this.flashMessages.show('Por favor llena el formulario correctamente',{
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      value.id = this.id;
      //modicar el cliente
      this.clientesServicio.modificarCliente(value);  
      this.router.navigate(['/']);
    }
  }

  eliminar(){
    if(confirm('¿Seguro que desea elminiar el cliente?')){
      this.clientesServicio.eliminarCliente(this.cliente);
      this.router.navigate(['/']);
    }
  }

}
