import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataServices{

    constructor(private httpClient: HttpClient) { }

    guardarListaProductos( productos:Producto[] ){
        this.httpClient.post('https://chango-market-default-rtdb.firebaseio.com/datos.json', productos);
    }

    guardarListaUsuarios( usuarios:Usuarios[] ){
        this.httpClient.post('https://chango-market-default-rtdb.firebaseio.com/datos.json', usuarios);
    }

}