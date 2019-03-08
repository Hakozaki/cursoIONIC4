import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteCheckBoxPage } from './componente-check-box.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteCheckBoxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteCheckBoxPage]
})
export class ComponenteCheckBoxPageModule {}
