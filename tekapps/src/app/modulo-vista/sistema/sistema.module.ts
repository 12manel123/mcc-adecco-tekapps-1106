import { NgModule } from '@angular/core';//Para que la pagina de ANgular e Ionic Funcione correctamente.
import { CommonModule } from '@angular/common';//proporciona directivas y funcionalidades comunes que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule } from '@angular/forms';//Las formas y las directrices de la pagina sistema.

import { IonicModule } from '@ionic/angular';//Para que el modulo Ionic funcoone correctamente.

import { SistemaPageRoutingModule } from './sistema-routing.module';//La ruta de la pagina sistema. 

import { SistemaPage } from './sistema.page';// Para que la pagina sistema funcione correctamente.

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SistemaPageRoutingModule//Imports de la pagina sistema.
  ],
  declarations: [SistemaPage]//Declaraciones de la pagina sistema.
})
export class SistemaPageModule {}//Exports class de la pagina sistema,
