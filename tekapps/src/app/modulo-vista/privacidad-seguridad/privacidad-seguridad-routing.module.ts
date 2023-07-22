import { NgModule } from '@angular/core';// Para que el Ionic funcione, y el angular también.
import { Routes, RouterModule } from '@angular/router'; //Las rutas de la pagina privacidad. 

import { PrivacidadSeguridadPage } from './privacidad-seguridad.page';// Para que la pagina privacidad funcione. 

const routes: Routes = [
  {
    path: '',
    component: PrivacidadSeguridadPage
  },//Rutas de la pagina privacidad. 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],//Imports i exports de la pagina privacidad y seguridad. 
})
export class PrivacidadSeguridadPageRoutingModule {}//Export class de la pagina seguridad y privacidad. 
