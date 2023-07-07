import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectosPageRoutingModule } from './directos-routing.module';

import { DirectosPage } from './directos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectosPageRoutingModule
  ],
  declarations: [DirectosPage]
})
export class DirectosPageModule {}
