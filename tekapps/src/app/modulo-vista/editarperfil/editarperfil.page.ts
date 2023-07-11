import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarPerfilPage {
  nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    fotoPerfil: string;

  constructor() {
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.contrasena = '';
    this.fotoPerfil = '../assets/img/default-profile.png'; 
  }
  

  guardarCambios() {
   
    console.log('Se han guardado los cambios');
  }

  cancelarEdicion() {
   
    console.log('Se ha cancelado la edición');
  }

  editarFotoPerfil() {
  
    console.log('Editar foto de perfil');
  }
}