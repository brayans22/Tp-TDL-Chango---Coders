import { Injectable } from '@angular/core';
import { IProducto } from '../../Interfaces/IProducto';

@Injectable({
  providedIn: 'root',
})

export class CatalogoService {

  constructor() {}
  
  readonly productos: IProducto[] = [

    // VEGETALES
    {
      urlImagen: 'https://cdn.shopify.com/s/files/1/0246/3147/6308/products/zanahoria_1080x.jpg?v=1556947271',
      nombre: 'Zanahoria',
      precio: 100,
      id: 1,
      tipoDeProducto: 'Vegetal',
      descripcion: 'Daucus carota subespecie sativus,\n llamada popularmente zanahoria.\n',
    },

    {
      urlImagen: 'https://static.vecteezy.com/system/resources/previews/002/979/927/large_2x/onion-on-white-background-free-photo.jpg',
      nombre: 'Cebolla',
      precio: 90,
      id: 2,
      tipoDeProducto: 'Vegetal',
      descripcion: 'Allium cepa, comúnmente conocida\n como cebolla\n',
    },

    {
      urlImagen: 'https://img.freepik.com/foto-gratis/papa-joven-aislado-sobre-fondo-blanco_461160-3621.jpg',
      nombre: 'Papa',
      precio: 140,
      id: 3,
      tipoDeProducto: 'Vegetal',
      descripcion: 'Solanum tuberosum, de nombre común\n papa o patata.\n',
    },

    // FRUTAS
    {
      urlImagen: 'https://thumbs.dreamstime.com/b/manzana-roja-en-el-fondo-blanco-de-la-reina-nueva-zelanda-una-primer-144391264.jpg',
      nombre: 'Manzana',
      precio: 340,
      id: 4,
      tipoDeProducto: 'Fruta',
      descripcion: 'La manzana es el fruto comestible de la \n especie Malus domestica\n',
    },

    {
      urlImagen: 'https://thumbs.dreamstime.com/b/fresa-con-las-hojas-en-el-fondo-blanco-54647513.jpg',
      nombre: 'Fresa',
      precio: 400,
      id: 5,
      tipoDeProducto: 'Fruta',
      descripcion: 'Fragaria, llamado comúnmente fresa \n o frutilla, es un género de plantas rastreras \n estoloníferas de la familia Rosaceae.\n'
    },

    {
      urlImagen: 'https://lanoticia.com/wp-content/uploads/2021/03/semillas-sandia.jpeg',
      nombre: 'Sandia',
      precio: 200,
      id: 6,
      tipoDeProducto: 'Fruta',
      descripcion: 'Citrullus lanatus, comúnmente \n llamada sandía, acendría, sindria, \n patilla, es una especie de \n la familia Cucurbitaceae.\n',
    },

    // BEBIDAS ALCOHOLICAS
    {
      urlImagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/861/458/products/3303331-6bc212c1f87f7e25a116038277957066-640-0.jpg',
      nombre: 'Fernet Branca',
      precio: 700,
      id: 7,
      tipoDeProducto: 'Bebida Alcoholica',
      descripcion: 'El fernet es una bebida alcohólica de la \n familia de los amaros italianos \n',
    },

    {
      urlImagen: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/185/530/products/campari1-62d97f6fff3363a0ba15898894900623-640-0.png',
      nombre: 'Campari',
      precio: 400,
      id: 8,
      tipoDeProducto: 'Bebida Alcoholica',
      descripcion: 'Campari es una bebida alcohólica de \n grado medio, tonificante y refrescante.\n'
    },

    {
      urlImagen: 'https://bar-drinks.com.ar/wp-content/uploads/2021/10/ComboBOM-botella-copon-fondo-blanco.jpg',
      nombre: 'Gin Tonic',
      precio: 800,
      id: 9,
      tipoDeProducto: 'Bebida Alcoholica',
      descripcion: 'Es un cóctel compuesto de ginebra y \n agua tónica servida con hielo\n',
    },


    // BEBIDAS NO ALCOHOLICAS
    {
      urlImagen: 'https://media.istockphoto.com/photos/cocacola-bottle-isolated-on-a-white-background-picture-id458936563?k=20&m=458936563&s=170667a&w=0&h=7cZnBLmgneSnUBtYeyFGNT5BACEma2VZbzOhKjXJQtw=',
      nombre: 'Coca-Cola',
      precio: 290,
      id: 10,
      tipoDeProducto: 'Bebida No Alcoholica',
      descripcion: 'Es una bebida azucarada gaseosa \n vendida a nivel mundial en tiendas, \n restaurantes y máquinas expendedoras \n',
    },

    {
      urlImagen: 'https://thumbs.dreamstime.com/b/botella-de-bebida-sprite-aislada-en-blanco-130706596.jpg',
      nombre: 'Sprite',
      precio: 190,
      id: 11,
      tipoDeProducto: 'Bebida No Alcoholica',
      descripcion: 'Sprite es una refresco hecho a base de \n agua carbonatada con sabor a Lima o limón\n'
    },

    {
      urlImagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/839/products/project_20201006_2336359-011-ed0360813c02da49ae16020383114438-1024-1024.png',
      nombre: 'Jugo Cepita',
      precio: 210,
      id: 12,
      tipoDeProducto: 'Bebida No Alcoholica',
      descripcion: 'Un jugo hecho con naranjas frescas\n',
    },


    // CONGELADOS
    {
      urlImagen: 'https://thumbs.dreamstime.com/b/schnitzel-de-pollo-con-lim%C3%B3n-sobre-fondo-blanco-aislado-198869625.jpg',
      nombre: 'Milanesa',
      precio: 900,
      id: 13,
      tipoDeProducto: 'Congelado',
      descripcion: ' Pollo en forma de milanesa congelado\n',
    },

    {
      urlImagen: 'https://www.lacoopeencasa.coop/media/lcec/publico/articulos/1/5/2/15295eeb40bb868a3e11e2b47f7055dc',
      nombre: 'Pizza Congelada',
      precio: 550,
      id: 14,
      tipoDeProducto: 'Congelado',
      descripcion: 'Pizza congelada para microondas\n'
    },

    {
      urlImagen: 'https://hiperlibertad.vteximg.com.br/arquivos/ids/173544-600-600/Hamburguesa-Paty-Cl-sico-4-un-1-13363.jpg?v=637483870700500000',
      nombre: 'Sandia',
      precio: 700,
      id: 15,
      tipoDeProducto: 'Congelado',
      descripcion: 'Paty para hamburguesa congelado.\n',
    },


    // DULCES
    {
      urlImagen: 'https://http2.mlstatic.com/D_NQ_NP_622576-MLA46206007250_052021-V.jpg',
      nombre: 'Don Saturn',
      precio: 230,
      id: 16,
      tipoDeProducto: 'Dulce',
      descripcion: 'Bizcochitos cubiertos de azúcar.\n',
    },

    {
      urlImagen: 'https://c8.alamy.com/compes/f8e2fy/paquete-de-galletas-oreo-sobre-un-fondo-blanco-f8e2fy.jpg',
      nombre: 'Oreo',
      precio: 90,
      id: 17,
      tipoDeProducto: 'Dulce',
      descripcion: 'Galletas de chocolate con cremita \n en el medio.\n'
    },

    {
      urlImagen: 'https://superlorito.com.ar/wp-content/uploads/2020/04/chocolinas-250g.jpg',
      nombre: 'Chocolinas',
      precio: 200,
      id: 6,
      tipoDeProducto: 'Dulce',
      descripcion: 'Galletas hechas con chocolate.\n',
    },

  ];

}
