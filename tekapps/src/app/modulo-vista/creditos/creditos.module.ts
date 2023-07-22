import { NgModule } from '@angular/core';//Modulos de la pagina Creditos.
import { CommonModule } from '@angular/common';//proporciona directivas y funcionalidades comunes que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule } from '@angular/forms';//formulario de pagina creditos.

import { IonicModule } from '@ionic/angular';//Ionic para que funcione bien dicho componente.

import { CreditosPageRoutingModule } from './creditos-routing.module';//Ruta de la pagina creditos.

import { CreditosPage } from './creditos.page';//Para que la pagina creditos, funcione correctamente.

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditosPageRoutingModule//Imports de la pagina creditos.
  ],
  declarations: [CreditosPage]//Declaraciones de la pagina creditos.
})
export class CreditosPageModule {}//Export clas de la pagina creditos.
