import { NgModule } from '@angular/core';//Se determina la funcionalidad del Ionic y Angular.
import { Routes, RouterModule } from '@angular/router';//Se define el router de la pagina de register.

import { RegisterPage } from './register.page';//Se define la pagina de register.

const routes: Routes = [
  {
    path: '',
    component: RegisterPage//Son los constantes componentes de La ruta del Register.
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],//Los imports y exports del Register.
})
export class RegisterPageRoutingModule {}//El export class del register. 
