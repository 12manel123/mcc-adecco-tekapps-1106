import { NgModule } from '@angular/core';//Para que el Angular y Ionic funcione correctamente. 
import { CommonModule } from '@angular/common';//proporciona directivas y funcionalidades comunes que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule } from '@angular/forms';//Formularios de los modulos de la pagina busuqeda.

import { IonicModule } from '@ionic/angular';//Para que la pagina Ionic funcione. 

import { BusquedaPageRoutingModule } from './busqueda-routing.module';//Las rutas de la pagina de busqueda.

import { BusquedaPage } from './busqueda.page';//Para que la pagina busqueda funcione.

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaPageRoutingModule,//Todos los imports de la pagina busqueda.
    
  ],
  declarations: [BusquedaPage]//Las declaraciones de la pagina busqueda.
})
export class BusquedaPageModule {}//Export class de la pagina busqueda.
