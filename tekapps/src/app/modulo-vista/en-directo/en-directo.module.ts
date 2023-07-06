import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnDirectoPageRoutingModule } from './en-directo-routing.module';

import { EnDirectoPage } from './en-directo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnDirectoPageRoutingModule
  ],
  declarations: [EnDirectoPage]
})
export class EnDirectoPageModule {}
