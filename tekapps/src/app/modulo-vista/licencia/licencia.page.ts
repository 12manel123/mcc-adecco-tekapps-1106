import { Component, OnInit } from '@angular/core';//Para que el angular y el Ionic funcionen bien.
import { MenuController } from '@ionic/angular';//Control del menu de la pagina privacidad y seguridad. 

@Component({
  selector: 'app-licencia',
  templateUrl: './licencia.page.html',
  styleUrls: ['./licencia.page.scss'],//Componentes de la pagina licencia.
})
export class LicenciaPage implements OnInit {//Export class de la pagina licencia.

  constructor( private menuCrtl: MenuController) { }

  ngOnInit() {
  }
  onClick() {
    this.menuCrtl.toggle();//Menu para la pagina de privacidad y seguridad, que se accede mediante un click.
  }

}
