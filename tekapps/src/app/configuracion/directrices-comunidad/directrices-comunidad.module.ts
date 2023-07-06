import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectricesComunidadPageRoutingModule } from './directrices-comunidad-routing.module';

import { DirectricesComunidadPage } from './directrices-comunidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectricesComunidadPageRoutingModule
  ],
  declarations: [DirectricesComunidadPage]
})
export class DirectricesComunidadPageModule {}
