import { Component, OnInit } from '@angular/core';//Para que el ionic y el angular funcione bien.

@Component({
  selector: 'app-directos',
  templateUrl: './directos.page.html',
  styleUrls: ['./directos.page.scss'],//Componentes de la pagina directos.
})
export class DirectosPage implements OnInit {
  nombreCanal: string = '12Manel123';
  descripcion: string = '50000001 subscriptores';//Numero y nombre del canal.
  suscrito: boolean = false;
  notificaciones: boolean = false;
  mensajes: any[] = [
    { texto: 'Soyfurro29:Hola', propio: true },
    { texto: '12manel123:Eres lo mejor!', propio: false },
    { texto: 'Soyfurro29:ffffffff', propio: true },
    { texto: 'Eduardo22:¿Y tú?', propio: true },
    { texto: 'Soyfurro29:También bien, gracias', propio: false },
  ];//Funcionalidad del chat.
  
  
 
  constructor() { }

  ngOnInit() {
  }
 
  showBackButton: boolean = false;
  nuevoMensaje: string = '';
  toggleBackButton() {
    this.showBackButton = !this.showBackButton;
  }
  
  hideBackButton() {
    setTimeout(() => {
      this.showBackButton = false;
    }, 5000);//Para que el boton se active y desaparezca.
  }
  alternarSuscripcion() {
    this.suscrito = !this.suscrito;//Saber si esta subsctiro o no.
  }
  
  alternarNotificaciones() {
    this.notificaciones = !this.notificaciones;//Alternanza de notificaciones.
  }
  obtenerIcono(): string {
    return this.suscrito ? 'heart' : 'heart-outline';//Corazon para decir "me gusta"
  }

  obtenerTextoBoton(): string {
    return this.suscrito ? 'Desuscribirse' : 'Subscribirse';//Decir si está subscrito o no.
  }

  enviarMensaje() {
    if (this.nuevoMensaje.trim() !== '') {
      const mensaje = { texto: this.nuevoMensaje, propio: true };
      this.mensajes.push(mensaje);
      this.nuevoMensaje = '';//Envio del mensaje. Ventana.
    }
  }
  
}
