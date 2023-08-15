import { Component, OnInit } from '@angular/core';//Para que funcione Angular y Ionic.
import { MenuController } from '@ionic/angular';//Control del menu de la pagina privacidad y seguridad. 

@Component({
  selector: 'app-conexiones',
  templateUrl: './conexiones.page.html',
  styleUrls: ['./conexiones.page.scss'],//Componentes de la pagina Conexiones.
})
export class ConexionesPage implements OnInit {//Export class de la pagina conexiones.
  
  constructor( private menuCrtl: MenuController) { }

  ngOnInit() {
  }
  onClick() {
    this.menuCrtl.toggle();//Menu para la pagina de privacidad y seguridad, que se accede mediante un click.
  }

}
