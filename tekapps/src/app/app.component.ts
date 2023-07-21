import { Component } from '@angular/core';//para definir y configurar el componente AppComponent.
import { LoginPage } from './modulo-vista/login/login.page';// tiene un módulo separado llamado modulo-vista y dentro de él, una página llamada LoginPage.

@Component({
  selector: 'app-root',//se utilizará para identificar y ubicar el componente en la plantilla de la aplicación.
  templateUrl: 'app.component.html',//Es la ruta del archivo HTML de la plantilla que se asociará con el componente.
  styleUrls: ['app.component.scss'],//contiene las rutas de los archivos de hojas de estilos (archivos SCSS) que se aplicarán al componente. 
})
export class AppComponent {//Se define la clase principal del componente
  rootPage: any = LoginPage;// Esto indica que la página LoginPage será la página raíz que se mostrará cuando se inicie la aplicación.
  constructor () {}//En este caso,el constructor está vacío y no realiza ninguna acción particular.
}
