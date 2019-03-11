import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'instalacao', loadChildren: './instalacao/instalacao.module#InstalacaoPageModule' },
  { path: 'layout', loadChildren: './layout/layout.module#LayoutPageModule' },
  { path: 'layout-header-footer', loadChildren: './layout-header-footer/layout-header-footer.module#LayoutHeaderFooterPageModule' },
  { path: 'layout-tabs', loadChildren: './layout-tabs/layout-tabs.module#LayoutTabsPageModule' },
  { path: 'layout-menu', loadChildren: './layout-menu/layout-menu.module#LayoutMenuPageModule' },
  { path: 'layout-split-pane', loadChildren: './layout-split-pane/layout-split-pane.module#LayoutSplitPanePageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'layout-grid', loadChildren: './layout-grid/layout-grid.module#LayoutGridPageModule' },
  { path: 'layout-css-utilities', loadChildren: './layout-css-utilities/layout-css-utilities.module#LayoutCssUtilitiesPageModule' },
  { path: 'componentes', loadChildren: './componentes/componentes.module#ComponentesPageModule' },
  { path: 'componente-action-sheet', loadChildren: './componente-action-sheet/componente-action-sheet.module#ComponenteActionSheetPageModule' },
  { path: 'componente-alert', loadChildren: './componente-alert/componente-alert.module#ComponenteAlertPageModule' },
  { path: 'componente-badge', loadChildren: './componente-badge/componente-badge.module#ComponenteBadgePageModule' },
  { path: 'componente-button', loadChildren: './componente-button/componente-button.module#ComponenteButtonPageModule' },
  { path: 'componente-card', loadChildren: './componente-card/componente-card.module#ComponenteCardPageModule' },
  { path: 'componente-check-box', loadChildren: './componente-check-box/componente-check-box.module#ComponenteCheckBoxPageModule' },
  { path: 'componente-radio', loadChildren: './componente-radio/componente-radio.module#ComponenteRadioPageModule' },
  { path: 'componente-date-time', loadChildren: './componente-date-time/componente-date-time.module#ComponenteDateTimePageModule' },
  { path: 'componente-fab', loadChildren: './componente-fab/componente-fab.module#ComponenteFabPageModule' },
  { path: 'componente-input', loadChildren: './componente-input/componente-input.module#ComponenteInputPageModule' },
  { path: 'componente-list', loadChildren: './componente-list/componente-list.module#ComponenteListPageModule' },
  { path: 'componente-loading', loadChildren: './componente-loading/componente-loading.module#ComponenteLoadingPageModule' },
  { path: 'componente-modal', loadChildren: './componente-modal/componente-modal.module#ComponenteModalPageModule' },
  { path: 'componente-modal-interno', loadChildren: './componente-modal-interno/componente-modal-interno.module#ComponenteModalInternoPageModule' },
  { path: 'componente-range', loadChildren: './componente-range/componente-range.module#ComponenteRangePageModule' },
  { path: 'componente-select', loadChildren: './componente-select/componente-select.module#ComponenteSelectPageModule' },
  { path: 'componente-slide', loadChildren: './componente-slide/componente-slide.module#ComponenteSlidePageModule' },
  { path: 'componente-spinner', loadChildren: './componente-spinner/componente-spinner.module#ComponenteSpinnerPageModule' },
  { path: 'componente-toast', loadChildren: './componente-toast/componente-toast.module#ComponenteToastPageModule' },
  { path: 'componente-infinite-scroll', loadChildren: './componente-infinite-scroll/componente-infinite-scroll.module#ComponenteInfiniteScrollPageModule' },
  { path: 'componente-popover', loadChildren: './componente-popover/componente-popover.module#ComponentePopoverPageModule' },
  { path: 'componente-popover-interno', loadChildren: './componente-popover-interno/componente-popover-interno.module#ComponentePopoverInternoPageModule' },
  { path: 'componente-refresher', loadChildren: './componente-refresher/componente-refresher.module#ComponenteRefresherPageModule' },
  { path: 'componente-search-bar', loadChildren: './componente-search-bar/componente-search-bar.module#ComponenteSearchBarPageModule' },
  { path: 'componente-toogle', loadChildren: './componente-toogle/componente-toogle.module#ComponenteTooglePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
