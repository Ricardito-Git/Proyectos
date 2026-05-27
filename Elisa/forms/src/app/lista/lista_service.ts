import { Injectable } from "@angular/core";


@Injectable({ providedIn:'root'})
export class ListaService{
    private datos: any[]= [];


    actualizarLista(nuevaLista: any[]){
        this.datos = nuevaLista;

        
        }
    obtenerLista(){
        return this.datos;
        }
}