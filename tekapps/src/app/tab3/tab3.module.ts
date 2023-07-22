import { IonicModule } from '@ionic/angular';//contiene las funcionalidades y componentes esenciales para una aplicación Ionic.
import { NgModule } from '@angular/core';//Se importa el decorador NgModule del paquete @angular/core. 
import { CommonModule } from '@angular/common';//proporciona directivas comunes, como ngIf, ngFor, y otras, que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule } from '@angular/forms';// proporciona funcionalidades para trabajar con formularios y vinculación de datos en Angular.
import { Tab3Page } from './tab3.page';// Se importa el componente Tab3Page desde el archivo tab3.page.ts.
import { ExploreContainerComponentModule } from '../modulo-vista/explore-container/explore-container.module';//Este módulo probablemente contiene componentes o funcionalidades adicionales necesarias para el funcionamiento de Tab3Page.
import { TranslateModule } from '@ngx-translate/core';//es utilizado para configurar la internacionalización (i18n) en la aplicación y permitir la traducción de texto en diferentes idiomas.
import { Tab3PageRoutingModule } from './tab3-routing.module';//Este módulo contiene las rutas y configuraciones de enrutamiento para esta página.



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    TranslateModule//Modulos importados al tab 3.
  ],
  declarations: [Tab3Page]//Declaraciones tab 3.
})
export class Tab3PageModule {}// Clases exportadas al tab 3. 
