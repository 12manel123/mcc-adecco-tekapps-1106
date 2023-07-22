import { Component, OnInit } from '@angular/core';//es una interfaz que define un método que se ejecutará cuando el componente se inicialice.
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';//Estas clases son utilizadas para crear y validar formularios en la aplicación.
import { Router, RouterFeature } from '@angular/router';// es un servicio que se utiliza para manejar la navegación entre diferentes rutas en la aplicación.
import { HttpClient } from '@angular/common/http';//es un servicio que se utiliza para realizar peticiones HTTP, como obtener datos de una API o enviar datos a un servidor.
import { Injectable } from "@angular/core";// se utiliza para decorar un servicio y permitir que pueda ser inyectado en otros componentes o servicios.
import { Platform } from '@ionic/angular';//es un servicio que proporciona información sobre la plataforma en la que se está ejecutando la aplicación, como si es web, Android, iOS, etc.
import { ActivatedRoute } from '@angular/router';//es un servicio que proporciona acceso a la ruta activa y a los parámetros de la URL.
import { AlertController } from '@ionic/angular';// es un servicio que se utiliza para mostrar alertas y cuadros de diálogo en la interfaz de usuario.
import { AuthService } from 'src/app/service/auth.service';//Este servicio probablemente es propio de la aplicación y se utiliza para manejar la autenticación y autorización de usuarios.
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],//Son los componentes de la pagina de login.
})

export class LoginPage implements OnInit {
  usuario: FormGroup;//Son los exports class de la pagina de Login,
  
  constructor(public http: HttpClient, private router: Router,private auth:AuthService,private alertCtrl:AlertController ,private platform: Platform,private fb: FormBuilder) {
    //Este es el constructor.
    this.usuario= this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });// Esto son los validadores de la pagina de registro. 
  }
  
  login() {
    this.auth.loginUser(this.usuario.value.email, this.usuario.value.password)
      .then(result => {
        this.router.navigate(['/tabs']);
      })// Esto son los resultados del loguin que lo lleva a la tab.
      .catch(err => {
        this.alertCtrl.create({
          header: 'Error',
          subHeader: err.message,
          buttons: ['Aceptar']
        }).then(alert => {
          alert.present();
        });//Esto es una alerta en forma de mensaje. 
      });
  }
  
  ngOnInit() {
  }

  

  
}
