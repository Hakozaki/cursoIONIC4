import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-componente-action-sheet',
  templateUrl: './componente-action-sheet.page.html',
  styleUrls: ['./componente-action-sheet.page.scss'],
})
export class ComponenteActionSheetPage implements OnInit {

  constructor(public actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async openActionSheet() {
    const acs = await this.actionSheetCtrl.create({
      header: 'Cores ',
      buttons: [
        {
          text: 'Vermelho',
          role: 'destructive',
          icon: 'color-fill',
          handler: () => {
            console.log('VERMELHO');
          }
        },
        {
          text: 'Azul',
          
          icon: 'color-filter',
          handler: () => {
            console.log('AZUL');
          }
        },
        {
          text: 'Amarelo',
          
          icon: 'color-palette',
          handler: () => {
            console.log('AMARELO');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('CANCELAR');
          }
        }
      ]
    });

    await acs.present();
  }

}
