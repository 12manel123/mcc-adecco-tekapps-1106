import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiCanalPage } from './mi-canal.page';

const routes: Routes = [
  {
    path: '',
    component: MiCanalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiCanalPageRoutingModule {}
