import { NgModule } from '@angular/core';// Para que funcione el ionic y Angular.
import { CommonModule } from '@angular/common';// proporciona directivas y funcionalidades comunes que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule } from '@angular/forms';// Formularios de la pagina privacidad y seguridad. 

import { IonicModule } from '@ionic/angular';//Para que el Ionic funcione bien en la pagina privacidad y seguridad. 

import { PrivacidadSeguridadPageRoutingModule } from './privacidad-seguridad-routing.module';//Las rutas de la pagina privacidad y seguridad.

import { PrivacidadSeguridadPage } from './privacidad-seguridad.page';//Para que funcione la pagina de privacidad y Seguridad. 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacidadSeguridadPageRoutingModule//Los imports de la pagina privacidad y seguridad.
  ],
  declarations: [PrivacidadSeguridadPage]//Declaraciones de la pagina privacidad y seguridad. 
})
export class PrivacidadSeguridadPageModule {}//Export class de la pagina privacidad y seguridad. 
