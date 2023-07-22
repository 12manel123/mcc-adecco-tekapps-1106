import { NgModule } from '@angular/core';//Modulo para que funcione el Angular. 
import { RouterModule, Routes } from '@angular/router';//Router para que funcionen las rutas.
import { Tab2Page } from './tab2.page';//Tipo de pagina.

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,//Componente que define la Pagina.
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]//Import y exports de la Pagina.
})
export class Tab2PageRoutingModule {}//Export de la tab 2.
