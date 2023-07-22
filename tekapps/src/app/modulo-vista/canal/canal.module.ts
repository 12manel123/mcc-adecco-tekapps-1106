import { NgModule } from '@angular/core';//Esto es para que el ionic funcione.
import { CommonModule } from '@angular/common';//proporciona directivas y funcionalidades comunes que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule } from '@angular/forms';//El formulario de la pagina canal.

import { IonicModule } from '@ionic/angular';//Para que funcione el Ionic.

import { CanalPageRoutingModule } from './canal-routing.module';//Rutas de la pagina Canal.

import { CanalPage } from './canal.page';//Para que la pagina canal funcione correctamente.

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanalPageRoutingModule//Imports de la pagina canal.
  ],
  declarations: [CanalPage]//Declaraciones de la pagina canal
})
export class CanalPageModule {}//Export class de la pagina canal
