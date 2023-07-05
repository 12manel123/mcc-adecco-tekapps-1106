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
      this.router.navigateByUrl('/tabs/tab1');    } else {
    
      alert("Debes rellenar todos los campos");
    }
  }


}
