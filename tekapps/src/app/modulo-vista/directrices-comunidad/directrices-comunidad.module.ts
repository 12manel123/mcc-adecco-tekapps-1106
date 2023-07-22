import { NgModule } from '@angular/core';//Para que funcione el Ionic y el angular.
import { CommonModule } from '@angular/common';//proporciona directivas y funcionalidades comunes que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule } from '@angular/forms';//Formularios de la pagina directrices.

import { IonicModule } from '@ionic/angular';//Para que funcione el angular.

import { DirectricesComunidadPageRoutingModule } from './directrices-comunidad-routing.module';//Para marcar las rutas de la pagina directrices.

import { DirectricesComunidadPage } from './directrices-comunidad.page';//Para que funcione la pagina directrices.

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectricesComunidadPageRoutingModule//Imports de la pagina de directrices.
  ],
  declarations: [DirectricesComunidadPage]//Declaraciones de la pagina directrices.
})
export class DirectricesComunidadPageModule {}//Export class de la pagina directrices.
