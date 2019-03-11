import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-search-bar',
  templateUrl: './componente-search-bar.page.html',
  styleUrls: ['./componente-search-bar.page.scss'],
})
export class ComponenteSearchBarPage implements OnInit {

  nome: string;
  pessoas: any;
  pessoasFiltradas: any;

  constructor() {
    this.pessoas = [
      { id: 1, nome: 'marcus', idade: 28 },
      { id: 12, nome: 'kelly', idade: 28 },
      { id: 13, nome: 'felipe', idade: 25 },
      { id: 14, nome: 'matheus', idade: 20 },
      { id: 15, nome: 'rodrigo', idade: 28 },
      { id: 16, nome: 'pacoquinha', idade: 20 }
    ];

    this.pessoasFiltradas = this.pessoas;
  }

  ngOnInit() {
  }

  filtrarItens(){
    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome : string){
    this.pessoasFiltradas = this.pessoas;

    return this.pessoasFiltradas.filter((item)=>{
      return item.nome.toLowerCase().includes(nome.toLowerCase());  
    });  
  }

}
