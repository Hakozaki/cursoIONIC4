import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-componente-loading',
  templateUrl: './componente-loading.page.html',
  styleUrls: ['./componente-loading.page.scss'],
})
export class ComponenteLoadingPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async loading(modo: string) {
    let parametros = {};
    switch (modo) {
      case 'default':
        parametros = {
          message: 'Carregando ....',
          duration: 2000
        }

        break;

      default:
        parametros = {
          spinner: modo,
          message: 'Carregando ....',
          duration: 2000,
          translucent: true
        }
        break;
    }

    let loadVar = await this.loadingCtrl.create(parametros);

    await loadVar.present();
  }

}
