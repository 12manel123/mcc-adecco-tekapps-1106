import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.page.html',
  styleUrls: ['./canal.page.scss'],
})
export class CanalPage implements OnInit {
    nombreCanal: string = "ElRubius";
    imagen: string = "../assets/img/el rubius (2).png";
    descripcion: string = "Bienvenido a mi canal. Aquí encontrarás contenido increíble.";
  
    images = [
      {
        title: "Jugando al Maincrah",
        description: "Wtf no te vas a creer lo que pasó",
        imageUrl: "/assets/img/rubius 1.png"
      },
      {
        title: "24 h en directo",
        description: "EXTENSIBLE!",
        imageUrl: "/assets/img/rubius 2.png"
      },
      {
        title: "Entrevista",
        description: "Aquí con Auron.",
        imageUrl: "/assets/img/rubius 3.png"
      },
      {
        title: "Bettle Royale",
        description: "Fornite (Torneo)",
        imageUrl: "/assets/img/rubius 4.png"
      },{
        title: "Garrys mod",
        description: "Garrys mod con amigos",
        imageUrl: "/assets/img/rubius 5.png"
      },
      {
        title: "Estaba detrás de tigre",
        description: "Soy furro XD",
        imageUrl: "/assets/img/rubius 6.png"
      },
      {
        title: "Squid Games",
        description: "Presentación",
        imageUrl: "/assets/img/rubius 7.png"
      },
      {
        title: "Entrevista",
        description: "Jordi Wild y el Rubius",
        imageUrl: "/assets/img/rubius 8.png"
      },
      {
        title: "Charlando tranquilamente",
        description: "E de explicaros una cosa",
        imageUrl: "/assets/img/rubius 9.png"
      },
      {
        title: "Juego de miedo ;)",
        description: "Noche de terror",
        imageUrl: "/assets/img/rubius 10.png"
      },
    ];

  constructor(private navCtrl: NavController) { }

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
    }, 10000); // Ocultar el botón después de 10 segundos
  }
  editarPerfil() {
  }
}
