import { NgModule } from '@angular/core';//se utilizará para definir el módulo raíz de la aplicación.
import { BrowserModule } from '@angular/platform-browser';//que proporciona funcionalidades necesarias para aplicaciones que se ejecutan en el navegador.
import { RouteReuseStrategy } from '@angular/router';// permite definir una estrategia de reutilización de rutas para mejorar el rendimiento de la navegación en la aplicación.
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';//proporciona utilidades para desarrollar aplicaciones con el framework Ionic, incluyendo componentes y servicios específicos de Ionic
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';//permite el cambio de idioma de la aplicación.
import { TranslateHttpLoader } from '@ngx-translate/http-loader';//específica para cargar traducciones a través del servicio HttpClient.
import { HttpClientModule, HttpClient } from '@angular/common/http';//permite realizar solicitudes HTTP para cargar recursos como traducciones.
import { AppRoutingModule } from './app-routing.module';//Este módulo contiene la configuración de las rutas de la aplicación.
import { AppComponent } from './app.component';// Se importa el componente raíz (AppComponent) de la aplicación.
import { environment } from '../environments/environment';//contiene variables de entorno y configuraciones específicas para cada entorno.
import { AngularFireModule } from '@angular/fire/compat';// proporciona integración con Firebase en la aplicación.

export function HttpLoaderFactory(http: HttpClient) {//se utiliza para configurar la forma en que se cargarán las traducciones para el cambio de idioma.
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');// Retorna la función del traductor.
}
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(environment.firebase),HttpClientModule,TranslateModule.forRoot({
    defaultLanguage: 'es', //Establece el idioma predeterminado para la aplicación en español ('es'). Esto significa que si no se encuentra una traducción específica para una etiqueta o cadena en el idioma actual del usuario.
    loader: {//Especifica cómo se cargarán las traducciones.
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient],//Carga las traducciones a través del servicio.
    },
  }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],//Aquí se configuran los proveedores para la aplicación.
  bootstrap: [AppComponent],//Aquí se especifica el componente raíz
})
export class AppModule {}//. La clase AppModule se utiliza para definir las configuraciones del módulo, importar otros módulos necesarios, especificar los componentes y servicios que forman parte de la aplicación, y realizar otras configuraciones esenciales para la aplicación.
