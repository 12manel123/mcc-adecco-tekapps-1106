import { Component, OnInit } from '@angular/core';//Para que funcione la pagina de Ionic y Angular. 
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],//Componentes de la pagina ayuda. 
})
export class AyudaPage implements OnInit {
  ayudaForm: FormGroup;//Exports de la pagina ayuda.

constructor(private formBuilder: FormBuilder,
  private alertController: AlertController,
  private http: HttpClient,
  private toastController: ToastController)
   { this.ayudaForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    correo: ['', Validators.required,],
    mensaje: ['', Validators.required],
  });
}
  ngOnInit() {
  }
    
  enviarMensaje() {
    if (this.ayudaForm.valid) {
      const formData = this.ayudaForm.value;

      // Lógica para enviar los datos al backend mediante una solicitud POST
      this.http.post('http://tuservidor.com/api/enviar-mensaje', formData)
        .subscribe(
          (response) => {
            // Mostrar una notificación de éxito
            this.mostrarNotificacion('Mensaje enviado con éxito');
            // Resetear el formulario después de enviarlo
            this.ayudaForm.reset();
          },
          (error) => {
            // Manejar cualquier error que pueda ocurrir en la solicitud
            console.error('Error al enviar el mensaje', error);
          }
        );
    } else {
      // Si el formulario no es válido, muestra un mensaje de error
      this.mostrarNotificacion('Por favor, rellena todos los campos obligatorios.');
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
  
