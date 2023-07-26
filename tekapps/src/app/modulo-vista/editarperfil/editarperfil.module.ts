import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarperfilPageRoutingModule } from './editarperfil-routing.module';

import { EditarPerfilPage} from './editarperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarperfilPageRoutingModule
  ],
  declarations: [EditarPerfilPage]
})
export class EditarperfilPageModule {}
