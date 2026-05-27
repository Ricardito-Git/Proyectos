import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-component',
  imports: [],
  templateUrl: './contador-component.html',
  standalone:true,
  styleUrl: './contador-component.css',
})
export class ContadorComponent {
  public numero: number =0;
  incrementar(){
    this.numero+=1;
  }

  decrementar(){
    if (this.numero>0){
      this.numero-=1
    }
  }

}
