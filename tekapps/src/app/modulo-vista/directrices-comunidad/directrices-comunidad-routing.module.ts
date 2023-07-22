import { NgModule } from '@angular/core';//Para que el mofulo de la comunidad funcione.
import { Routes, RouterModule } from '@angular/router';//Modulo de ruta de la pagina directices.

import { DirectricesComunidadPage } from './directrices-comunidad.page';//Para que la pagina directrices funcione.

const routes: Routes = [
  {
    path: '',
    component: DirectricesComunidadPage
  }
];//Rutas de la pagina directrices.

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],//Imports i exports de la pagina directrices.
})
export class DirectricesComunidadPageRoutingModule {}//Export class de la pagina directices.
