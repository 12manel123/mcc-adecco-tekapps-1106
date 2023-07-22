import { NgModule } from '@angular/core';//Modulos de la pagina creditos.
import { Routes, RouterModule } from '@angular/router';//Rutas de la pagina creditos para que funcione correctamente.

import { CreditosPage } from './creditos.page';//Para que la pagina creditos funcioe correctamente

const routes: Routes = [
  {
    path: '',
    component: CreditosPage
  }//Rutas de la pagina creditos.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],//Imports i Exports de la pagina creditos.
})
export class CreditosPageRoutingModule {}//Export clas de la pagina creditos.
