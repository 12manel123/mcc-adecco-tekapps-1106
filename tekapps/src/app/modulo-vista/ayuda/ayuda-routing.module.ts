import { NgModule } from '@angular/core';// Ng modulo de la pagina de ayuda para que funcione.
import { Routes, RouterModule } from '@angular/router';//Las rutas de la pagina Ayuda.
import { AyudaPage } from './ayuda.page';//La pagina ayuda en si, para que funcione bien. 

const routes: Routes = [
  {
    path: '',
    component: AyudaPage//El componenente de la pagina ayuda.
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],//Rutas de la pagina ayuda.
})
export class AyudaPageRoutingModule {}//Exports de la pagina ayuda.
