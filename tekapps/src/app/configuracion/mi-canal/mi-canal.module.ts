import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiCanalPageRoutingModule } from './mi-canal-routing.module';

import { MiCanalPage } from './mi-canal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiCanalPageRoutingModule
  ],
  declarations: [MiCanalPage]
})
export class MiCanalPageModule {}
