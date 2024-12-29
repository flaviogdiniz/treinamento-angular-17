import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
  imagem:string = 'assets/noite.jpg';

  alterarImagem(){
    if(this.imagem === 'assets/noite.jpg'){
      this.imagem = 'assets/dia.jpg';
    }else{
      this.imagem = 'assets/noite.jpg';
    }
  }
}
