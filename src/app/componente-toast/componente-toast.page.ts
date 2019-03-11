import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-componente-toast',
  templateUrl: './componente-toast.page.html',
  styleUrls: ['./componente-toast.page.scss'],
})
export class ComponenteToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async showToast(pos: string) {
    let toastOpt = {};
    switch (pos) {
      case '':
        toastOpt = {
          message: 'TESTE',
          duration: 2000
        };
        break;

      case 'close':
        toastOpt = {
          message: 'TESTE',
          position: 'top',
          showCloseButton: true,
          duration: 2000
        };
        break;

      case 'closeText':
        toastOpt = {
          message: 'TESTE',
          position: 'top',
          showCloseButton: true,
          closeButtonText: 'FECHAR',
          duration: 2000
        };
        break;

      default:
        toastOpt = {
          message: 'TESTE',
          duration: 2000,
          position: pos
        };
        break;
    }

    console.log(toastOpt);

    let toast = await this.toastCtrl.create(toastOpt);

    return await toast.present();
  }

}
