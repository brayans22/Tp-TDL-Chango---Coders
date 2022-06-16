import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './modelos/producto.model';
import { ServicioProductosService } from './servicio-productos.service';


@Injectable()
export class DataServices{

    constructor(private httpClient: HttpClient, private misProductos: ServicioProductosService) { 
        misProductos.cargarListaProductos();
    }

    guardarListaProductos( productos: Producto[] ){

        this.httpClient.post('https://chango-market-default-rtdb.firebaseio.com/datos.json', productos).subscribe({
            next: (mensaje) => console.log('Se han guardado los productos: ' + mensaje),
            error: (mensaje) => console.log('Error: ' + mensaje),
        });

    }

    /*
    guardarListaUsuarios( usuarios:Usuarios[] ){
        this.httpClient.post('https://chango-market-default-rtdb.firebaseio.com/datos.json', usuarios);
    }
    */

}