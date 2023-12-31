import { Component, OnInit } from '@angular/core';//es una interfaz que define un método que se ejecutará cuando el componente se inicialice.
import { FormGroup,Validators,FormBuilder } from '@angular/forms';//: Se importan clases y utilidades relacionadas con el manejo de formularios reactivos en Angular. Estas clases son utilizadas para crear y validar formularios en la aplicación.
import { Router,} from '@angular/router';//es un servicio que se utiliza para manejar la navegación entre diferentes rutas en la aplicación.
import { HttpClient } from '@angular/common/http';//es un servicio que se utiliza para realizar peticiones HTTP, como obtener datos de una API o enviar datos a un servidor.
import { Platform,AlertController } from '@ionic/angular';// es un servicio que proporciona acceso a la ruta activa y a los parámetros de la URL.
import { AuthService } from 'src/app/service/auth.service'; //Este servicio probablemente es propio de la aplicación y se utiliza para manejar la autenticación y autorización de usuarios.
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],//Componente del registro. 
})
export class RegisterPage implements OnInit {
  usuario: FormGroup;//Export class de la pagina de registro.
  imagePreview!: string; // Agregar esta línea para la vista previa de la imagen
  constructor(public http: HttpClient, private router: Router,private auth:AuthService,private alertCtrl:AlertController ,private platform: Platform,private fb: FormBuilder) {
    //  Constructor de la pagina del registro.
    this.usuario= this.fb.group({
      username:['', [Validators.required, Validators.minLength(3)]],
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirmation: ['', [Validators.required, Validators.minLength(6)]],
    });//Validadores de la pagina de registro.
  }
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string; // Muestra la vista previa de la imagen
      };
      reader.readAsDataURL(file);
    }
  }
  
  signin() {// Verifica si las contraseñas coinciden
    if (this.usuario.value.password === this.usuario.value.passwordConfirmation) {
      if(this.usuario.value.username.length>=3){
      this.auth.registerUser(this.usuario.value.email, this.usuario.value.password)
        .then(result => {
          this.router.navigate(['/tabs']);
        })
        .catch(err => {
          this.alertCtrl.create({
            header: 'Error',
            subHeader: err.message,
            buttons: ['Aceptar']
          }).then(alert => {
            alert.present();
          });
        });
      }
      else{alert("Es obligatorio el nombre de usuario")}} 
    else {alert("Las contraseñas no coinciden");}
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