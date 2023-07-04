import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemaPage } from './sistema.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemaPageRoutingModule {}
