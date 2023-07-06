import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenciaPageRoutingModule } from './licencia-routing.module';

import { LicenciaPage } from './licencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenciaPageRoutingModule
  ],
  declarations: [LicenciaPage]
})
export class LicenciaPageModule {}
