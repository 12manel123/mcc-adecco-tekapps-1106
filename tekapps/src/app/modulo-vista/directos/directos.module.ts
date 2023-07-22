import { NgModule } from '@angular/core';//Para que el ionic y el angular funcionen perfectamente.
import { CommonModule } from '@angular/common';//proporciona directivas y funcionalidades comunes que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule } from '@angular/forms';//Formularios de la pagina directos.

import { IonicModule } from '@ionic/angular';//Para que el ionic funcione perfectamente.

import { DirectosPageRoutingModule } from './directos-routing.module';//Las rutas de la pagina directos.

import { DirectosPage } from './directos.page';//Para que la pagina directos funcione perfectamente.

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectosPageRoutingModule//Imports de la pagina directos.
  ],
  declarations: [DirectosPage]//Declaraciones de la pagina directos.
})
export class DirectosPageModule {}//Exports class de la pagina directos.
