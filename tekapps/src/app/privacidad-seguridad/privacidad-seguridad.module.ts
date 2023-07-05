import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacidadSeguridadPageRoutingModule } from './privacidad-seguridad-routing.module';

import { PrivacidadSeguridadPage } from './privacidad-seguridad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacidadSeguridadPageRoutingModule
  ],
  declarations: [PrivacidadSeguridadPage]
})
export class PrivacidadSeguridadPageModule {}
