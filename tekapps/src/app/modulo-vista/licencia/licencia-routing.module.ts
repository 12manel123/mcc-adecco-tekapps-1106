import { NgModule } from '@angular/core';//Para que funcione el angular y el ionic.
import { Routes, RouterModule } from '@angular/router';//Para que funcionen los routing modules de la pagina licencia.

import { LicenciaPage } from './licencia.page';// Para que la pagina licencia funcione.

const routes: Routes = [
  {
    path: '',
    component: LicenciaPage
  }
];//Las constantes de las rutas de la pagina Licencia.

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],//Imports y exports de la pagina licencia.
})
export class LicenciaPageRoutingModule {}//Export class de la pagina licencia.
