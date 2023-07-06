import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenciaPage } from './licencia.page';

const routes: Routes = [
  {
    path: '',
    component: LicenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenciaPageRoutingModule {}
