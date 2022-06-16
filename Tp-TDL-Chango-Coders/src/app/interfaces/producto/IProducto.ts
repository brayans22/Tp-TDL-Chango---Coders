import { ICategoriaProducto } from '../categoria/ICategoriaProducto';
import { IPrecio } from '../precio/IPrecio';

export interface IProducto{
    nombre: string;
    precio: IPrecio;
    id: number;
    categoria: ICategoriaProducto;
}