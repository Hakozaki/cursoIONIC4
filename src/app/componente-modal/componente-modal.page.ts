import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComponenteModalInternoPage } from '../componente-modal-interno/componente-modal-interno.page';

@Component({
  selector: 'app-componente-modal',
  templateUrl: './componente-modal.page.html',
  styleUrls: ['./componente-modal.page.scss'],
})
export class ComponenteModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async showModal() {
    let modal = await this.modalCtrl.create({
      component: ComponenteModalInternoPage,
      componentProps:{nome:'Marcus Hakozaki' , idade : 28}
    });

    modal.onDidDismiss().then( (resp) => {
      console.table(resp.data);
    });

    await modal.present();
  }

}
