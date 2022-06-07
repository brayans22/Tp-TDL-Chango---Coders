import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class DataServices{

    constructor(private httpClient: HttpClient) { }

    /*guardarUsuario(usuario: any){
        this.httpClient.post('https://listado-de-usuarios-74851-default-rtdb.firebaseio.com/datos.json', usuario);
    }*/


}