import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteSearchBarPage } from './componente-search-bar.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteSearchBarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteSearchBarPage]
})
export class ComponenteSearchBarPageModule {}
