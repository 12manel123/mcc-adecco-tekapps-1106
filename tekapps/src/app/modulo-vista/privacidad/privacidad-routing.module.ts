import { NgModule } from '@angular/core';//Es lo que hace funcionar el Ionic y el Angular.
import { Routes, RouterModule } from '@angular/router';//Las rutas para la pagina de privacidad.

import { PrivacidadPage } from './privacidad.page';//Para que la pagina de privacidad funcione correctamente.

const routes: Routes = [
  {
    path: '',
    component: PrivacidadPage
  }
];//Las rutas y componentes de la pagina privacidad.

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],//Imports y exports de la pagina de privacidad.
})
export class PrivacidadPageRoutingModule {}// export clas para la pagina privacidad.
