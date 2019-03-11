import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-componente-alert',
  templateUrl: './componente-alert.page.html',
  styleUrls: ['./componente-alert.page.scss'],
})
export class ComponenteAlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async openAlertSimples() {
    let alert = await this.alertCtrl.create({
      header: 'Alert Simples',
      subHeader: 'SubHeader',
      message: 'Essa é a mensagem simples.',
      buttons: [
        'OK'
      ]
    });

    await alert.present();
  }

  async openAlertMultiplosBotoes() {
    let alert = await this.alertCtrl.create({
      header: 'Alert Multiplos Botões',
      message: 'Essa é a mensagem.',
      buttons: ['OK', 'CANCELAR', 'ABRIR MODAL', 'DELETE']
    });

    await alert.present();
  }

  async openAlertPrompt() {
    let alert = await this.alertCtrl.create({
      header: 'ACESSO RESTRITO',
      inputs:[
        {
          name:'login',
          type:'text',
          placeholder:'LOGIN'
        },
        {
          name:'senha',
          type:'password',
          placeholder:'SENHA'
        }
      ],
      buttons:[
        {
          text:'LOGAR',
          cssClass:'secondary',
          handler: (dados)=>{
            console.log('FODA-SE ' + dados.login , dados);
          }
        }
      ]
    });

    await alert.present();
  }

  async openAlertComfirmacao() {
    let alert = await this.alertCtrl.create({
      header: 'Alert CONFIRMAÇÃO',
      message: 'Essa é a mensagem.',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('CANCELADO');
          }
        },
        {
          text: 'OK',
          cssClass: 'primary',
          handler: () => {
            console.log('OK');
          }
        }
      ]
    });

    await alert.present();
  }
}
