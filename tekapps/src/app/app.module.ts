import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';


//import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; 
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFireModule } from '@angular/fire/compat';
const firebaseConfig = {
  apiKey: "AIzaSyAtWMEi-cdPLM1eu3J0wFNwpgwZwuezzrc",
  authDomain: "tekapps-c4324.firebaseapp.com",
  databaseURL: "https://tekapps-c4324-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tekapps-c4324",
  storageBucket: "tekapps-c4324.appspot.com",
  messagingSenderId: "126998096037",
  appId: "1:126998096037:web:08d7c57c124500c036454c",
  measurementId: "G-RMN0FBND8P"
};
import { environment } from '../environments/environment';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es', // Idioma predeterminado
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
