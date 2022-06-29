import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Configuracion } from '../modelo/configuracion.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfiguracionServicio{
    configuracionDoc: AngularFirestoreDocument<Configuracion> | any;
    configuracion: Observable<Configuracion> | any ;

    //id unico de la coleccion de configuracion
    id = '1';

    constructor(private db: AngularFirestore){}

    getConfiguracion(): Observable<any>{
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracion = this.configuracionDoc.valueChanges();
        return this.configuracion;
    }

    modificarConfiguracion(configuracion: Configuracion){
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracionDoc.update(configuracion);
    }
}