import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteBadgePage } from './componente-badge.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteBadgePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteBadgePage]
})
export class ComponenteBadgePageModule {}
