import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteDateTimePage } from './componente-date-time.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteDateTimePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteDateTimePage]
})
export class ComponenteDateTimePageModule {}
