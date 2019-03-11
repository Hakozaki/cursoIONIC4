import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-componente-refresher',
  templateUrl: './componente-refresher.page.html',
  styleUrls: ['./componente-refresher.page.scss'],
})
export class ComponenteRefresherPage implements OnInit {

  message: string = 'Curso chato de ionic';

  constructor() { }

  ngOnInit() {
  }

  atualizar(event) {
    setTimeout(() => {
      this.message = 'VAI TOMAR NO CU';
      event.target.complete();
    }, 2000);
  }
}
