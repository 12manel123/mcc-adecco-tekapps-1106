import { NgModule } from '@angular/core';//Para que la pagina ionic y Angular funcione bien.
import { Routes, RouterModule } from '@angular/router';//Rutas de la pagina conexiones.

import { ConexionesPage } from './conexiones.page';// Para que la pagina conexiones funcione bien.

const routes: Routes = [
  {
    path: '',
    component: ConexionesPage
  }
];//Construccion de las rutas de la pagina conexiones.

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],//Imports i Exports de la pagina conexiones.
})
export class ConexionesPageRoutingModule {}//Exports class de la pagina conexiones.
