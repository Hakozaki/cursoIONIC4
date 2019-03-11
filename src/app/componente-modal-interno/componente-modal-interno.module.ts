import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteModalInternoPage } from './componente-modal-interno.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteModalInternoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteModalInternoPage]
})
export class ComponenteModalInternoPageModule {}
