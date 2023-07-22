import { IonicModule } from '@ionic/angular';//Para que funcione el Angular y el Ionic.
import { NgModule } from '@angular/core';//Modulo de la tab 2.
import { CommonModule } from '@angular/common';//Porporciona directivas de el tab2page.
import { FormsModule } from '@angular/forms';//FOrmas de la tab 2.
import { Tab2Page } from './tab2.page';//La pagina en si, tab 2.
import { ExploreContainerComponentModule } from '../modulo-vista/explore-container/explore-container.module';//Proporciona directivas del exploreContainer para que funcione en el tab 2.
import { Tab2PageRoutingModule } from './tab2-routing.module';//Rutas de la tab 2.

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule//Imports del tab 2.
  ],
  declarations: [Tab2Page]//Declaraciones del tab 2.
})
export class Tab2PageModule {}//Exports de la tab 3.
