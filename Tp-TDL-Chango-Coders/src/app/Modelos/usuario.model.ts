
export class Usuario {

    private nombre : string;
    private id : number;
    private telefono : number;
    private password : number;

    constructor( nombre : string , id : number , telefono : number , password : number ) {
        this.nombre = nombre;
        this.id = id;
        this.telefono = telefono;
        this.password = password;
    }

}