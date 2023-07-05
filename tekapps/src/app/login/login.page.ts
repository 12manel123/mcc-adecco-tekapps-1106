import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, } from '@angular/forms';
import { Router, RouterFeature } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  formularioLogin: FormGroup;

  constructor(private router: Router) {
    this.formularioLogin = new FormGroup({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  onIngresar() {
    if (this.formularioLogin.valid) {
      // El formulario es válido, realiza la lógica necesaria para el inicio de sesión
      console.log('Inicio de sesión exitoso');
      this.router.navigateByUrl('/tabs/tab1');    } else {
      // El formulario es inválido, muestra un mensaje de error o realiza alguna acción adicional
      console.log('Error en el formulario de inicio de sesión');
      alert("ERROR!");
    }
  }


}
