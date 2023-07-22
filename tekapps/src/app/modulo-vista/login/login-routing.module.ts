import { NgModule } from '@angular/core';//Esto es para que vaya el ionic y el angular. 
import { Routes, RouterModule } from '@angular/router';//Son las rutas del modulo de Login.
import { LoginPage } from './login.page';//Es para que la pagina de login funcione.

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'tab1',
    loadChildren: () => import('../../tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('../../tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('../../tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  //El login irá redirigido a las 3 paginas de Tabs cuando se ingrese. 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],// Esto son los imports y exports de login.
})
export class LoginPageRoutingModule {}//Esto es la export class de login.
