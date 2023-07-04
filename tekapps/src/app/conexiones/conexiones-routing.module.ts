import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConexionesPage } from './conexiones.page';

const routes: Routes = [
  {
    path: '',
    component: ConexionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConexionesPageRoutingModule {}
