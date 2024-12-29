import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {

  //Vetor
  vetor:Produto[]=[];

  //Visibilidade dos botoes
  btnCadastrar:boolean = true;

  //Objeto de formulário
  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  });


  //Construtor
  constructor(private servico:ProdutoService){}

  //Inicialização do componente
  ngOnInit(){
    this.selecionar();
  }

  //Método para selecionar todos os produtos
  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
  }

  //Método para cadastrar  produtos

  cadastrar(){
    this.servico.cadastrar(this.formulario.value as Produto).subscribe(retorno => {

      this.vetor.push(retorno);
      this.formulario.reset();
    })
  }
}
