import { NgModule } from '@angular/core';//Angular y Ionic que funcionan gracias a esta observacion.
import { CommonModule } from '@angular/common';//proporciona directivas y funcionalidades comunes que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule } from '@angular/forms';//Formulario de la pagina del componente.

import { IonicModule } from '@ionic/angular';//Para que funcione el Ionic.

import { ExploreContainerComponent } from './explore-container.component';//Para que funcione bien la pagina de componente container. 

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]//Declaraciones y exports.
})
export class ExploreContainerComponentModule {}//Export class de la pagina.
