import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador-component/contador-component';
import{ IngresaValor } from './ingresa-valor/ingresa-valor';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ContadorComponent, IngresaValor ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:true
})
export class App {
  numero=0;




  titulo= 'Mi carrito';
  carritoVacio=false;
  misCompras=['Manzanas', 
    'Pan','']

    sumar(){this.numero++;}
  
  restar(){this.numero--;}
  
  protected readonly title = signal('Proyectote');
} 
