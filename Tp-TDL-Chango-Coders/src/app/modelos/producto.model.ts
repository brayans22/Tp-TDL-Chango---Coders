import { ICategoriaProducto } from '../interfaces/categoria/ICategoriaProducto';
import { IPrecio } from '../interfaces/precio/IPrecio';
import { IProducto } from '../interfaces/producto/IProducto';

export class Producto{

    private nombre: string;
    private precio: IPrecio;
    private id: number;
    private categoria: ICategoriaProducto;

    constructor( nombre: string, precio: IPrecio, id: number, categoria: ICategoriaProducto ){
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.categoria = categoria;
    }

}