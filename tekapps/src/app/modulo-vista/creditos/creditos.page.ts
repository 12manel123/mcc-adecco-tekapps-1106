import { Component, OnInit } from '@angular/core';//Para que la pagina ionic y ANgular funcione correctamente.

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.page.html',
  styleUrls: ['./creditos.page.scss'],// Componentes de la pagina creditos.
})
export class CreditosPage implements OnInit {//Export clas de la pagina creditos.

  constructor() { }//No hay constructor en la pagina creditos. 

  ngOnInit() {
  }

}
