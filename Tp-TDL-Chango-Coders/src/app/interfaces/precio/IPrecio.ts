type TipoDeMoneda = 'ARS' | 'US';

export interface IPrecio{
    precio: number;
    tipoDeMoneda: TipoDeMoneda; 
}