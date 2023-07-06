import { Component } from '@angular/core';
import { LoginPage } from './modulo-vista/login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage: any = LoginPage;
  constructor () {}
}
