import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteInfiniteScrollPage } from './componente-infinite-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteInfiniteScrollPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteInfiniteScrollPage]
})
export class ComponenteInfiniteScrollPageModule {}
