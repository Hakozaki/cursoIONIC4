import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-check-box',
  templateUrl: './componente-check-box.page.html',
  styleUrls: ['./componente-check-box.page.scss'],
})
export class ComponenteCheckBoxPage implements OnInit {
  meses : any[] = [
    {nomeDoMes : 'Janeiro' , valor : 1 , marcado : false},
    {nomeDoMes : 'Fevereiro' , valor : 2 , marcado : false},
    {nomeDoMes : 'Março' , valor : 3 , marcado : true},
    {nomeDoMes : 'Abril' , valor : 4 , marcado : true},
    {nomeDoMes : 'Maio' , valor : 5 , marcado : false},
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.meses);
  }

  exibirMeses(){
    console.table(this.meses);
  }

}
