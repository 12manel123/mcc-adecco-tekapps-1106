import { NgModule } from '@angular/core';//Para que funcionen los modulos de la pagina.
import { CommonModule } from '@angular/common';//proporciona directivas y funcionalidades comunes que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule } from '@angular/forms';//Para que funcionen los formularios de la pagina declarada. 

import { IonicModule } from '@ionic/angular';// El componente ionic de la pagina.

import { PrivacidadPageRoutingModule } from './privacidad-routing.module';//Las rutas de la pagina privacidad. 

import { PrivacidadPage } from './privacidad.page';//Para que la pagina privacidad, funcione en si. 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacidadPageRoutingModule// Los Imports de la pagina privacidad. 
  ],
  declarations: [PrivacidadPage]//Las declaraciones de la pagina de privacidad.
})
export class PrivacidadPageModule {}//Los exportas class, de la clase de privacidad.
