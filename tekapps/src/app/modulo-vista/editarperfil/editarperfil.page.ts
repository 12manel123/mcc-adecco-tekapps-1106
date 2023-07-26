import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterFeature } from '@angular/router';// es un servicio que se utiliza para manejar la navegación entre diferentes rutas en la aplicación.

import { ViewChild, ElementRef } from '@angular/core';@Component({

  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarPerfilPage {
  @ViewChild('fileInput', { static: false }) fileInputRef!: ElementRef;
  nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    fotoPerfil: string;
     

  constructor(private router: Router) {
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.contrasena = '';
    this.fotoPerfil = '../assets/img/default-profile.png'; 
  }
  

  guardarCambios() {
   
    window.alert('Los cambios han sido guardados con éxito.');

  }

  cancelarEdicion() {
   
    console.log('Se ha cancelado la edición');
  }
  eliminarUsuario() {
    alert("Se ha eleminiado el usuario");
    this.router.navigate(['/login']);
    console.log('Se ha eliminado el usuario');
  }

    editarFotoPerfil() {
    this.fileInputRef.nativeElement.click();
  }
  
  handleFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Archivo seleccionado:', file);
      // ... código para enviar la imagen al servidor ...
    }
  }
}