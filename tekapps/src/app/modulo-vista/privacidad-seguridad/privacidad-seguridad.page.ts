import { Component, OnInit } from '@angular/core';//Para que la pagina de Angular y Ionic funcione correctamente.
import { MenuController } from '@ionic/angular';//Control del menu de la pagina privacidad y seguridad. 

@Component({
  selector: 'app-privacidad-seguridad',
  templateUrl: './privacidad-seguridad.page.html',
  styleUrls: ['./privacidad-seguridad.page.scss'],//Componentes de la Pagina de privacidad y seguridad. 
})
export class PrivacidadSeguridadPage implements OnInit {//Export de las paginas de privacidad y seguridad. 

  constructor( private menuCrtl: MenuController) { }

  ngOnInit() {
  }
  onClick() {
    this.menuCrtl.toggle();//Menu para la pagina de privacidad y seguridad, que se accede mediante un click.
  }
}
