import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteModalPage } from './componente-modal.page';
import { ComponenteModalInternoPage } from '../componente-modal-interno/componente-modal-interno.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    ComponenteModalInternoPage
  ],
  declarations: [
    ComponenteModalPage,ComponenteModalInternoPage
  ]
})
export class ComponenteModalPageModule {}
