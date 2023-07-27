import { NgModule } from '@angular/core';//se utilizará para definir el módulo raíz de la aplicación.
import { BrowserModule } from '@angular/platform-browser';//que proporciona funcionalidades necesarias para aplicaciones que se ejecutan en el navegador.
import { RouteReuseStrategy } from '@angular/router';// permite definir una estrategia de reutilización de rutas para mejorar el rendimiento de la navegación en la aplicación.
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';//proporciona utilidades para desarrollar aplicaciones con el framework Ionic, incluyendo componentes y servicios específicos de Ionic
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';//permite el cambio de idioma de la aplicación.
import { TranslateHttpLoader } from '@ngx-translate/http-loader';//específica para cargar traducciones a través del servicio HttpClient.
import { HttpClientModule, HttpClient } from '@angular/common/http';//permite realizar solicitudes HTTP para cargar recursos como traducciones.

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';



const firebaseConfig = {
  apiKey: "AIzaSyAtWMEi-cdPLM1eu3J0wFNwpgwZwuezzrc",//Es una clave única que identifica tu aplicación ante Firebase y se utiliza para autenticar la aplicación en los servicios de Firebase.
  authDomain: "tekapps-c4324.firebaseapp.com",// Es el dominio de autenticación de Firebase, que se utiliza para el proceso de autenticación y autorización de usuarios.
  databaseURL: "https://tekapps-c4324-default-rtdb.europe-west1.firebasedatabase.app",//Es la URL de la base de datos en tiempo real de Firebase. Aquí se almacenan los datos en una estructura de base de datos NoSQL en tiempo real.
  projectId: "tekapps-c4324",//Es el ID del proyecto en Firebase.
  storageBucket: "tekapps-c4324.appspot.com",//Es el bucket de almacenamiento de Firebase, que se utiliza para almacenar y gestionar archivos y recursos multimedia.
  messagingSenderId: "126998096037",//Es el ID del remitente de mensajería utilizado para enviar notificaciones push a dispositivos móviles.
  appId: "1:126998096037:web:08d7c57c124500c036454c",//Es el ID de la aplicación en Firebase.
  measurementId: "G-RMN0FBND8P"//Es el ID utilizado para medir el rendimiento y la analítica en Firebase.
};
import { environment } from '../environments/environment';// contiene variables de entorno y configuraciones específicas para cada entorno.



import { AppRoutingModule } from './app-routing.module';//Este módulo contiene la configuración de las rutas de la aplicación.
import { AppComponent } from './app.component';// Se importa el componente raíz (AppComponent) de la aplicación.


export function HttpLoaderFactory(http: HttpClient) {// Esta función se utiliza para cargar archivos de traducción para el módulo de internacionalización (TranslateModule).
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}//Este servicio se utiliza para realizar solicitudes HTTP, que es necesario para cargar los archivos de traducción.
@NgModule({//Aquí se define el decorador NgModule que se utiliza para configurar el módulo raíz.
  declarations: [AppComponent],//Esto indica que AppComponent es parte del módulo raíz y puede ser utilizado en la aplicación.
  imports: [//se configuran los módulos externos que se utilizarán en el módulo actual.
    BrowserModule, 
    IonicModule.forRoot(), // Es un módulo que proporciona funcionalidades esenciales para aplicaciones que se ejecutan en el navegador.
    AppRoutingModule,//Es un módulo de enrutamiento que define las rutas de la aplicación.
    AngularFireModule, 
    provideFirestore(() => getFirestore()),
    //AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideFirebaseApp( () => initializeApp(firebaseConfig)),//Es un módulo que proporciona integración con Firebase en la aplicación.
    AngularFireAuthModule,//Es un módulo específico para la autenticación con Firebase.
    HttpClientModule,// Es un módulo que proporciona el servicio HttpClient para realizar solicitudes HTTP.
    TranslateModule.forRoot({//Es un módulo de internacionalización
      defaultLanguage: 'es', // Idioma predeterminado
      loader: {//Esta propiedad especifica cómo se cargarán los archivos de traducción para la internacionalización.
        provide: TranslateLoader,//Aquí se especifica el proveedor para el servicio TranslateLoader. TranslateLoader.
        useFactory: HttpLoaderFactory,// Esta línea define una fábrica (useFactory) para crear una instancia del servicio TranslateHttpLoader.
        deps: [HttpClient],//Aquí se especifican las dependencias necesarias para la fábrica (useFactory).
      },
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],////Configuracion de los proveedores de servicios utilizados en la aplicación.
  bootstrap: [AppComponent],//Aquí se especifica el componente raíz (AppComponent) que se utilizará como punto de entrada principal de la aplicación.
})
export class AppModule {}
