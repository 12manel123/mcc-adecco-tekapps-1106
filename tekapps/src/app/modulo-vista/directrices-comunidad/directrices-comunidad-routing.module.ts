import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectricesComunidadPage } from './directrices-comunidad.page';

const routes: Routes = [
  {
    path: '',
    component: DirectricesComunidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectricesComunidadPageRoutingModule {}
