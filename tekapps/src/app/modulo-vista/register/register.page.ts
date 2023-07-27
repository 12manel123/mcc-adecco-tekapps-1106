import { Component, OnInit } from '@angular/core';//es una interfaz que define un método que se ejecutará cuando el componente se inicialice.
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';//: Se importan clases y utilidades relacionadas con el manejo de formularios reactivos en Angular. Estas clases son utilizadas para crear y validar formularios en la aplicación.
import { Router, RouterFeature } from '@angular/router';//es un servicio que se utiliza para manejar la navegación entre diferentes rutas en la aplicación.
import { HttpClient } from '@angular/common/http';//es un servicio que se utiliza para realizar peticiones HTTP, como obtener datos de una API o enviar datos a un servidor.
import { Injectable } from "@angular/core";//se utiliza para decorar un servicio y permitir que pueda ser inyectado en otros componentes o servicios.
import { Platform } from '@ionic/angular';// es un servicio que proporciona acceso a la ruta activa y a los parámetros de la URL.
import { ActivatedRoute } from '@angular/router';//es un servicio que proporciona acceso a la ruta activa y a los parámetros de la URL.
import { AlertController } from '@ionic/angular';//es un servicio que se utiliza para mostrar alertas y cuadros de diálogo en la interfaz de usuario.
import { AuthService } from 'src/app/service/auth.service'; //Este servicio probablemente es propio de la aplicación y se utiliza para manejar la autenticación y autorización de usuarios.



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],//Componente del registro. 
  
})
export class RegisterPage implements OnInit {
  usuario: FormGroup;//Export class de la pagina de registro.
  
  constructor(public http: HttpClient, private router: Router,private auth:AuthService,private alertCtrl:AlertController ,private platform: Platform,private fb: FormBuilder) {
    //  Constructor de la pagina del registro.
    this.usuario= this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });//Validadores de la pagina de registro.
  }

  signin() {
    this.auth.registerUser(this.usuario.value.email, this.usuario.value.password)
      .then(result => {
        this.router.navigate(['/login']);
      })
      .catch(err => {
        this.alertCtrl.create({
          header: 'Error',
          subHeader: err.message,
          buttons: ['Aceptar']
        }).then(alert => {
          alert.present();//Alerta de si está registrado o no.
        });
      });
  }
  loginGoogle() {
    this.auth.loginWithGoogle()
      .then(result => {
        // Si el inicio de sesión con Google es exitoso, puedes redirigir al usuario a la página que desees
        this.router.navigate(['/tabs']);
      })
      .catch(error => {
        // Manejo del error en caso de fallo al iniciar sesión con Google
        this.alertCtrl.create({
          header: 'Error',
          subHeader: 'Error al iniciar sesión con Google.',
          buttons: ['Aceptar']
        }).then(alert => {
          alert.present();
        });
      });
  }
  
  ngOnInit() {
  }


  aceptarTerminos(event: Event) {
    event.stopPropagation();//Aceptación de los terminos de registro.

  }
  mostrarTerminos() {
    this.router.navigateByUrl('/terms');//Mostrar los terminos de la aplicación.
  }
}