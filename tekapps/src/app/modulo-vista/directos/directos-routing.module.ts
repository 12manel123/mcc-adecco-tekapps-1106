import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectosPage } from './directos.page';

const routes: Routes = [
  {
    path: '',
    component: DirectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectosPageRoutingModule {}
