import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-select',
  templateUrl: './componente-select.page.html',
  styleUrls: ['./componente-select.page.scss'],
})
export class ComponenteSelectPage implements OnInit {

  customAlertOption: any = {
    header: 'Sexo',
    subHeader: 'Selecione o sexo',
    message: 'OUTROS = LIXO',
    translucent: true
  };

  customPopoverOption: any = {
    header: 'Sexo',
    subHeader: 'Selecione o sexo',
    message: 'OUTROS = LIXO'
  };

  customActionSheetOption: any = {
    header: 'Sexo',
    subHeader: 'Selecione o sexo'
  };

  constructor() { }

  ngOnInit() {
  }

}
