import { Component, OnInit } from '@angular/core';//Para que funcione la pagina de Ionic y Angular. 
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {
  ayudaForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private alertController: AlertController,
              private http: HttpClient,
              private toastController: ToastController) {

    this.ayudaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  enviarMensaje() {
    if (this.ayudaForm.valid) {
      // Mostrar una notificación de éxito
      this.mostrarNotificacion('Mensaje enviado con éxito');
      // Resetear el formulario después de enviarlo
      this.ayudaForm.reset();
    } else {
      // Si el formulario no es válido, muestra un mensaje de error
      this.mostrarNotificacion('Por favor, rellena todos los campos obligatorios y verifica que el correo electrónico sea válido.');
    }
  }

  async mostrarNotificacion(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000, // Duración de la notificación en milisegundos (3 segundos en este caso)
      position: 'bottom' // Posición en la pantalla donde aparecerá la notificación
    });
    toast.present();
  }
  }
