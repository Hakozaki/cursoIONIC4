import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteActionSheetPage } from './componente-action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteActionSheetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteActionSheetPage]
})
export class ComponenteActionSheetPageModule {}
