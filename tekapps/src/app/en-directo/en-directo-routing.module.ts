import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnDirectoPage } from './en-directo.page';

const routes: Routes = [
  {
    path: '',
    component: EnDirectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnDirectoPageRoutingModule {}
