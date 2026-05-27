import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingresa-valor',
  imports: [CommonModule, FormsModule],
  templateUrl: './ingresa-valor.html',
  styleUrl: './ingresa-valor.css',
})
export class IngresaValor {

  public titulo: string ='Registro de alumnos Cursando angular';

  public nombreAlumno: string = '';

  public listaAlumnos: string [] = ['Sonic the Hedgehog'];

  registraAlumnos() {
    if (this.nombreAlumno.trim() !=='') {
      this.listaAlumnos.push(this.nombreAlumno);
      this.nombreAlumno = '';
    }
  }

  get listavacia(): boolean{
    return this.listaAlumnos.length === 0;
  }

}
