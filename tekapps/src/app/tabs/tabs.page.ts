import { Component } from '@angular/core';//Este módulo es parte de Angular y proporciona funcionalidades esenciales para trabajar con componentes.

@Component({
  selector: 'app-tabs',// Es el selector CSS que se utilizará para identificar y ubicar el componente en la plantilla de la aplicación.
  templateUrl: 'tabs.page.html',//Es la ruta del archivo HTML de la plantilla que se asociará con el componente. 
  styleUrls: ['tabs.page.scss']//Es una matriz que contiene las rutas de los archivos de hojas de estilos (archivos SCSS) que se aplicarán al componente
})
export class TabsPage {//Aquí se define la clase TabsPage, que es la clase principal del componente.

  constructor() {}// No hay nada para el constructor

}
