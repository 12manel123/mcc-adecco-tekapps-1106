import { NgModule } from '@angular/core';//Para que el ionic y el angular funcionen bien.
import { Routes, RouterModule } from '@angular/router';//Router de la pagina directos.

import { DirectosPage } from './directos.page';//Para que la pagina directos esté bien conectada.

const routes: Routes = [
  {
    path: '',
    component: DirectosPage
  }
];// Constantes y rutas de la pagina directos.

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],//Imports y exports de la pagina directos.
})
export class DirectosPageRoutingModule {}//Export class de la pagina directos.
