import { NgModule } from '@angular/core';//Para que el Ionic y en angular funcionen perfectamente.
import { CommonModule } from '@angular/common';//proporciona directivas y funcionalidades comunes que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule } from '@angular/forms';//Para que los formularios de la pagina licencia funcionen bien.

import { IonicModule } from '@ionic/angular';//Significa que el Ionic está conectado perfectamente.

import { LicenciaPageRoutingModule } from './licencia-routing.module';//Son las rutas hacia la pagina Ionic.

import { LicenciaPage } from './licencia.page';//Para que la pagina licencia funcione correctamente.

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenciaPageRoutingModule//Imports de la pagina Licencia.
  ],
  declarations: [LicenciaPage]//Declaraciones de la pagina licencia.
})
export class LicenciaPageModule {}//Export class de la pagina licencia. 
