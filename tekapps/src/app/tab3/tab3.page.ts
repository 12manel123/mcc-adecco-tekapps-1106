import { Component, OnInit } from '@angular/core';//Se importa el decorador Component y la clase Component del módulo @angular/core. 
import { TranslateService } from '@ngx-translate/core';//Se importa el servicio TranslateService de la biblioteca @ngx-translate/core.
@Component({
  selector: 'app-tab3',//Es el selector CSS que se utilizará para identificar y ubicar el componente en la plantilla de la aplicación.
  templateUrl: 'tab3.page.html',//Es la ruta del archivo HTML de la plantilla que se asociará con el componente. 
  styleUrls: ['tab3.page.scss']//Es una matriz que contiene las rutas de los archivos de hojas de estilos (archivos SCSS) que se aplicarán al componente.
})
export class Tab3Page{// Aquí se define la clase Tab3Page, que es la clase principal del componente.

  constructor(private translate: TranslateService) {}// Este es el constructor de la clase Tab3Page

  changeLanguage(language: string) {
    this.translate.use(language);//Esta línea de código utiliza el servicio TranslateService para cambiar el idioma de la aplicación al idioma especificado por el parámetro language.
  }

}
