import { NgModule } from '@angular/core';//Para que funcione la pagina De Angular y Ionic.
import { CommonModule } from '@angular/common';//proporciona directivas y funcionalidades comunes que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule } from '@angular/forms';//Formulario de las paginas de Conexiones.

import { IonicModule } from '@ionic/angular';//Para que funcione la pagina Ionic.

import { ConexionesPageRoutingModule } from './conexiones-routing.module';//La ruta de la pagina conexiones.

import { ConexionesPage } from './conexiones.page';//Para que la pagina conexiones funcione bien.

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConexionesPageRoutingModule//Imports de la pagina conexiones.
  ],
  declarations: [ConexionesPage]//Declaraciones de la pagina conexiones.
})
export class ConexionesPageModule {}//Export class de la pagina conexiones.
