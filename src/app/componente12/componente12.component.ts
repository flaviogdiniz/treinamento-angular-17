import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {

  //Texto
  nome:string = 'Flavio';

  //Objeto
  obj:any = {'nome': 'Flavio', 'idade': 40};

  //Vetor de Objetos
  alunos:any = [
    {'nome':'Flavio', 'nota1':8,'nota2':10},
    {'nome':'Jessica', 'nota1':6,'nota2':8},
    {'nome':'Lucas', 'nota1':3,'nota2':2},
    {'nome':'Ricardo', 'nota1':7,'nota2':7}
  ];

}
