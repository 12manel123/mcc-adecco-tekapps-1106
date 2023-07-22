import { NgModule } from '@angular/core';//se utiliza para configurar y definir módulos en Angular.
import { CommonModule } from '@angular/common';// proporciona directivas comunes, como ngIf, ngFor, y otras, que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//se utiliza para trabajar con formularios basados en plantillas, mientras que ReactiveFormsModule se utiliza para trabajar con formularios reactivos.
import { IonicModule } from '@ionic/angular';// contiene las funcionalidades y componentes esenciales para una aplicación Ionic.
import { LoginPageRoutingModule } from './login-routing.module';//Este módulo contiene las rutas y configuraciones de enrutamiento para la página de inicio de sesión (LoginPage).
import { LoginPage } from './login.page';// Se importa el componente LoginPage desde el archivo login.page.ts.
import { AuthService } from 'src/app/service/auth.service';// Este servicio probablemente es propio de la aplicación y se utiliza para manejar la autenticación y autorización de usuarios.
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule//Imports de Login.
  ],
  declarations: [LoginPage],
  providers: [AuthService]//Las declaraciones y proveedores de Login.
})
export class LoginPageModule {}//Los exports class de loguin.
