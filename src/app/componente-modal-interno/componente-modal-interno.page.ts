import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-componente-modal-interno',
  templateUrl: './componente-modal-interno.page.html',
  styleUrls: ['./componente-modal-interno.page.scss'],
})
export class ComponenteModalInternoPage implements OnInit {

  constructor(
    private navParam: NavParams, 
    private alertCtrl: AlertController,
    private modalCtrl : ModalController) { }

  async ngOnInit() {
    let nome = this.navParam.get('nome');
    let idade = this.navParam.get('idade');

    let alerta = await this.alertCtrl.create({
      header: 'Seja Bem Vindo',
      message: nome + '/' + idade
    });

    return await alerta.present();
  }

  async closeModal(){
    let parametroResposta = {nome : 'Kelly', idade: 30};
    this.modalCtrl.dismiss(parametroResposta);
  }
}
