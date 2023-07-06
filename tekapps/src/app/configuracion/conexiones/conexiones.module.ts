import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConexionesPageRoutingModule } from './conexiones-routing.module';

import { ConexionesPage } from './conexiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConexionesPageRoutingModule
  ],
  declarations: [ConexionesPage]
})
export class ConexionesPageModule {}
