import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutTabsPage } from './layout-tabs.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
  path: 'tabs',
    component: LayoutTabsPage,
    children: [      
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutTabsPageRoutingModule {}
