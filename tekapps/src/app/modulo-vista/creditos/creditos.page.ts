import { Component, OnInit } from '@angular/core';//Para que la pagina ionic y ANgular funcione correctamente.
import { MenuController } from '@ionic/angular';//Control del menu de la pagina privacidad y seguridad. 

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.page.html',
  styleUrls: ['./creditos.page.scss'],// Componentes de la pagina creditos.
})
export class CreditosPage implements OnInit {//Export clas de la pagina creditos.

  constructor( private menuCrtl: MenuController) { }

  ngOnInit() {
  }
  onClick() {
    this.menuCrtl.toggle();//Menu para la pagina de privacidad y seguridad, que se accede mediante un click.
  }

}
