import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { ListaService } from './lista_Service';

@Component({
  selector: 'app-lista',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './lista.html',
  styleUrl: './lista.css',


})
export class lista{
  @Input() items: any[] = [];
  
  constructor (private listaservice: ListaService) {}
  ngOInit(){

    this.items = this.listaservice.obtenerLista();
    console.log('Contenido de la lista en el hijo:', this.items);
    
  }
}
