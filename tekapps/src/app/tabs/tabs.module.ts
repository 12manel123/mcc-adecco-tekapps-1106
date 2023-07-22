import { IonicModule } from '@ionic/angular';//contiene las funcionalidades y componentes esenciales para una aplicación Ionic.
import { NgModule } from '@angular/core';//proporciona directivas comunes, como ngIf, ngFor, y otras, que son utilizadas en la mayoría de los componentes de Angular.
import { CommonModule } from '@angular/common';//proporciona funcionalidades para trabajar con formularios y vinculación de datos en Angular.
import { FormsModule } from '@angular/forms';//proporciona funcionalidades para trabajar con formularios y vinculación de datos en Angular.

import { TabsPageRoutingModule } from './tabs-routing.module';// Este módulo contiene las rutas y configuraciones de enrutamiento para esta página.

import { TabsPage } from './tabs.page';//Lo mismo, Identifica rutas

@NgModule({//Aquí se define el decorador NgModule que se utiliza para configurar el módulo TabsPageModule.
  imports: [//En la propiedad imports, se configuran los módulos externos que se utilizarán en el módulo actual.
    IonicModule,//Se utiliza para importar las funcionalidades y componentes proporcionados por Ionic.
    CommonModule,// Se utiliza para importar las directivas comunes de Angular.
    FormsModule,// Se utiliza para importar las funcionalidades de formularios y vinculación de datos de Angular.
    TabsPageRoutingModule//Se utiliza para importar las configuraciones de enrutamiento para la página de pestañas.
  ],
  declarations: [TabsPage]//Declaraciones del modulo tabs.
})
export class TabsPageModule {}// Exportaciones del modulo tabs.
