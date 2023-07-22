import { NgModule } from '@angular/core';//Se importa el decorador NgModule del paquete @angular/core. 
import { RouterModule, Routes } from '@angular/router';//Se importa el módulo RouterModule y la interfaz Routes del paquete @angular/router. 
import { Tab3Page } from './tab3.page';//Se define una constante routes que es una matriz de objetos de ruta (Route) que se utilizarán para configurar las rutas de navegación.

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,//De donde viene la ruta principal, en este caso, del Tab 3.
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],// Iports del modulo, como el (forchild.Routes).
  exports: [RouterModule]//Son los exports del modulo-
})
export class Tab3PageRoutingModule {}//Las export clase, que no hay ninguna en este caso.
