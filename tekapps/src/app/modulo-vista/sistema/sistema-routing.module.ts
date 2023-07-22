import { NgModule } from '@angular/core';//Para que funcione la pagina de angular e Ionic 
import { Routes, RouterModule } from '@angular/router';//Ruta de la pagina de Sistema.

import { SistemaPage } from './sistema.page';//Para que la pagina sitema, funcione perfectamente. 

const routes: Routes = [
  {
    path: '',
    component: SistemaPage
  }
];//Componente de la pagina sistema.

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],//Imports y expoerts de la pagina sistema.
})
export class SistemaPageRoutingModule {}//Export clas de la pagina sistema.
