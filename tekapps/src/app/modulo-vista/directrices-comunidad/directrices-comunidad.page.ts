import { Component, OnInit } from '@angular/core';//Para que el angular y Ionic funcione.
import { MenuController } from '@ionic/angular';//Control del menu de la pagina privacidad y seguridad. 

@Component({
  selector: 'app-directrices-comunidad',
  templateUrl: './directrices-comunidad.page.html',
  styleUrls: ['./directrices-comunidad.page.scss'],//Componente de las directrices.
})
export class DirectricesComunidadPage implements OnInit {//Export class de la pagina directrices.

  constructor( private menuCrtl: MenuController) { }

  ngOnInit() {
  }
  onClick() {
    this.menuCrtl.toggle();//Menu para la pagina de privacidad y seguridad, que se accede mediante un click.
  }

}
