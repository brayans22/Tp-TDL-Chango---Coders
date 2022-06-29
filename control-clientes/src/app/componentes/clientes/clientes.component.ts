import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import { Cliente } from 'src/app/modelo/cliente.model';
import { FlashMessagesService } from 'flash-messages-angular'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  agregarCliente: boolean = false;

  clientes: Cliente[] ;
  cliente: Cliente ={
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }
  
  @ViewChild("clienteForm") clienteForm: NgForm ;

  @ViewChild("botonCerrar") botonCerrar: ElementRef ;

  constructor(private clientesServicio: ClienteServicio,
              private flashMessages: FlashMessagesService  
    ) { }

  ngOnInit() {
    this.clientesServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

  abrirModal(){
    this.agregarCliente = true;
  }

  cerrarModal(){
    this.agregarCliente = false;
  }

  getSaldoTotal(){
    let saldoTotal: number = 0;
    if(this.clientes){
      this.clientes.forEach( cliente =>{
        if(cliente.saldo){
          saldoTotal += cliente.saldo;
        }
      })
    }
    return saldoTotal;
  }

  agregar({value, valid}: NgForm){
    if(!valid){
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',timeout: 4000
      });
    }
    else{
      //Agregar el nuevo cliente
      this.clientesServicio.agregarCliente(value);
      if(this.clienteForm){
        this.clienteForm.resetForm();
      }
      this.cerrarModal();
    }
  }
}
