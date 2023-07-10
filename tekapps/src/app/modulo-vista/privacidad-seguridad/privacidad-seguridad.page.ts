import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-privacidad-seguridad',
  templateUrl: './privacidad-seguridad.page.html',
  styleUrls: ['./privacidad-seguridad.page.scss'],
})
export class PrivacidadSeguridadPage implements OnInit {

  constructor( private menuCrtl: MenuController) { }

  ngOnInit() {
  }
  onClick() {
    this.menuCrtl.toggle();
  }
}
