import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  cuenta: number = 0;
  porcentaje: number = 0;

  get propina(): number {
    return this.cuenta * (this.porcentaje / 100);
  }

  get total(): number {
    return this.cuenta + this.propina;
  }
}