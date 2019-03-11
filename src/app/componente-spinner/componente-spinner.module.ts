import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteSpinnerPage } from './componente-spinner.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteSpinnerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteSpinnerPage]
})
export class ComponenteSpinnerPageModule {}
