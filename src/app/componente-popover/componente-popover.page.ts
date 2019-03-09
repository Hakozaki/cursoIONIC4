import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ComponentePopoverInternoPage } from '../componente-popover-interno/componente-popover-interno.page';

@Component({
  selector: 'app-componente-popover',
  templateUrl: './componente-popover.page.html',
  styleUrls: ['./componente-popover.page.scss'],
})
export class ComponentePopoverPage implements OnInit {

  constructor(private popoverCtrl : PopoverController) { }

  ngOnInit() {
  }

  async showPopover(event : any){
    let popover = await this.popoverCtrl.create({
      component : ComponentePopoverInternoPage,
      event:event
    });

    return await popover.present();
  }

}
