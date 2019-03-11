import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteTooglePage } from './componente-toogle.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteTooglePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteTooglePage]
})
export class ComponenteTooglePageModule {}
