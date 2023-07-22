import { NgModule } from '@angular/core';//Para que funcione el Ionic y el Angular.
import { CommonModule } from '@angular/common';// proporciona directivas y funcionalidades comunes que son utilizadas en la mayoría de los componentes de Angular.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//Estos son los formularios del register modulo.

import { IonicModule } from '@ionic/angular';//Esto es para que el Ionic Funcione.

import { RegisterPageRoutingModule } from './register-routing.module';//Esto es el registro de la pagina de registro.

import { RegisterPage } from './register.page';//Esto es para que la pagina funcione. 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule//Los imports de la pagina registro.
  ],
  declarations: [RegisterPage]//Las declaraciones de la pagina de registro.
})
export class RegisterPageModule {}//La export class de la pagina de registro. 