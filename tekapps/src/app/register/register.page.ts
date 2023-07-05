import { Component, } from '@angular/core';
import { 
  FormGroup,
  FormControl,
  Validators,} from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  
})
export class RegisterPage {
  formularioRegister: FormGroup;

  constructor(private router: Router) {
    this.formularioRegister = new FormGroup({
      nombre: new FormControl('', Validators.minLength(1)),
      password: new FormControl('', Validators.minLength(1)),
      NumeroDeTelefono: new FormControl('', [Validators.minLength(1), Validators.pattern(/^[0-9]+$/)]),
      FechaDeNacimiento: new FormControl('', Validators.required,)
      
    });
  }
  aceptarTerminos(event: Event) {
    event.stopPropagation();

  }
  mostrarTerminos() {
    this.router.navigateByUrl('/terms');
  }
  onIngresar() {
    if (this.formularioRegister.valid) {
      this.router.navigateByUrl('/tabs/tab1');    } else {
      alert("Debes de completar todos los campos");
    }
  }
}