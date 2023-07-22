import { NgModule } from '@angular/core';//Para que funcione el Ionic y Angular.
import { Routes, RouterModule } from '@angular/router';//rutas de la pagina canal.

import { CanalPage } from './canal.page';//Para que la pagina canal funcione.

const routes: Routes = [
  {
    path: '',
    component: CanalPage
  }
];//Rutas constantes de la pagina canal.

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],//Export y imports de la pagina Canal.
})
export class CanalPageRoutingModule {}//Export class de la pagina canal. 
