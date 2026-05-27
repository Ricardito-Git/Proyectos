import { Component } from '@angular/core';

// Importamos los módulos necesarios para trabajar con formularios reactivos
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';

// Importamos CommonModule para usar directivas comunes como *ngFor y *ngIf
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  styleUrl: './app.css'
})

export class App {

miFormulario: FormGroup;

// índice del producto que estamos editando
indiceEditando: number | null = null;

// copia de seguridad del producto
productoBackup: any = null;

constructor(private fb: FormBuilder) {

  this.miFormulario = this.fb.group({
    nombreLista: ['', Validators.required],
    items: this.fb.array([])
  });

}

// Getter para acceder al array
get listaItems() {
  return this.miFormulario.get('items') as FormArray;
}

// AGREGAR
agregarItem() {

  const nuevoGrupo = this.fb.group({
    producto: ['', Validators.required],
    cantidad: [1, [Validators.required, Validators.min(1)]]
  });

  this.listaItems.push(nuevoGrupo);

}

// BORRAR
eliminarItem(indice: number) {

  this.listaItems.removeAt(indice);

  console.log('Lista actual:', this.listaItems.value);

}

// EDITAR
editarItem(indice: number) {

  this.indiceEditando = indice;

  this.productoBackup = { ...this.listaItems.at(indice).value };

  console.log("Editando:", this.productoBackup);

}

// UPDATE
actualizarItem() {

  if (this.indiceEditando === null) return;

  const item = this.listaItems.at(this.indiceEditando);

  item.patchValue({
    producto: item.value.producto,
    cantidad: item.value.cantidad
  });

  console.log("Producto actualizado:", item.value);

  this.indiceEditando = null;

}

// ENVIAR DATOS
enviarDatos() {

  console.log('Formulario completo:', this.miFormulario.value);

}

}

