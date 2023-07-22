import { NgModule } from '@angular/core';//para los modulos de las pagina rutas.
import { Routes, RouterModule } from '@angular/router'; //Rutas de la pagina busqueda.

import { BusquedaPage } from './busqueda.page';//Para que funcione bien la pagina busqueda.

const routes: Routes = [
  {
    path: '',
    component: BusquedaPage
  }
];// Constantes y componentes de la pagina busqueda.

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],//Import i exports de la pagina busqueda.
})
export class BusquedaPageRoutingModule {}//Export class de la pagina busqueda.
