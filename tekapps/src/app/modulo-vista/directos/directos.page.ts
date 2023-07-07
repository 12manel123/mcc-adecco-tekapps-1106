import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directos',
  templateUrl: './directos.page.html',
  styleUrls: ['./directos.page.scss'],
})
export class DirectosPage implements OnInit {
  nombreCanal: string = '12Manel123';
  descripcion: string = '50000001 subscriptores';
  suscrito: boolean = false;
  mensajes: any[] = [
    { texto: 'Soyfurro29:Hola', propio: true },
    { texto: '12manel123:Eres lo mejor!', propio: false },
    { texto: 'Soyfurro29:ffffffff', propio: true },
    { texto: 'Eduardo22:¿Y tú?', propio: true },
    { texto: 'Soyfurro29:También bien, gracias', propio: false },
  ];
  
  
 
  constructor() { }

  ngOnInit() {
  }
 
  
  nuevoMensaje: string = '';
  
  alternarSuscripcion() {
    this.suscrito = !this.suscrito;
  }
  obtenerIcono(): string {
    return this.suscrito ? 'heart' : 'heart-outline';
  }

  obtenerTextoBoton(): string {
    return this.suscrito ? 'Desuscribirse' : 'Subscribirse';
  }

  enviarMensaje() {
    if (this.nuevoMensaje.trim() !== '') {
      const mensaje = { texto: this.nuevoMensaje, propio: true };
      this.mensajes.push(mensaje);
      this.nuevoMensaje = '';
    }
  }
  
}
