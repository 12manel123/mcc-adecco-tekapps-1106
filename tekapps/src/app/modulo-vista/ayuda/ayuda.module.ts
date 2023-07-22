import { NgModule } from '@angular/core';//Todas las paginas de Ionic lo tienen para que funcione el Angular.
import { CommonModule } from '@angular/common';//proporciona directivas y funcionalidades comunes que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule } from '@angular/forms';//Las formas de la pagina de Angular e Ionic.
import { IonicModule } from '@ionic/angular';//Lo que hace funcionar el ionic.
import { AyudaPageRoutingModule } from './ayuda-routing.module';//La ruta de la pagina Ayuda. 
import { AyudaPage } from './ayuda.page';//La pagina ayuda, para que funcione.

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudaPageRoutingModule//Los imports de la pagina de ayuda.
  ],
  declarations: [AyudaPage]//Las declaraciones de la pagina ayuda.
})
export class AyudaPageModule {}//Los exports de la pagina ayuda.
