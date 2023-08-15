import { Component, OnInit } from '@angular/core';//Para que la pagina de Ionic y Angular funcione. 
import { MenuController } from '@ionic/angular';//Control del menu de la pagina privacidad y seguridad. 

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.page.html',
  styleUrls: ['./sistema.page.scss'],//Componentes de la pagina sistema.
})
export class SistemaPage implements OnInit {//Export class de la pagina sistema.

  constructor( private menuCrtl: MenuController) { }

  ngOnInit() {
  }
  onClick() {
    this.menuCrtl.toggle();//Menu para la pagina de privacidad y seguridad, que se accede mediante un click.
  }
}
