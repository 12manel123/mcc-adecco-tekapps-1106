import { Component, OnInit } from '@angular/core';//Para que la pagina de angular funcione.
import { NavController } from '@ionic/angular';//Navegador de la pagina canal.

@Component({
  selector: 'app-canal',
  templateUrl: './canal.page.html',
  styleUrls: ['./canal.page.scss'],//Componentes de la pagina Canal.
})
export class CanalPage implements OnInit {
Favoritos() {
throw new Error('Method not implemented.');
}
    nombreCanal: string = "ElRubius";
    imagen: string = "../assets/img/el rubius (2).png";
    descripcion: string = "Bienvenido a mi canal. Aquí encontrarás contenido increíble.";
  //Descripción de la pagina canal.
    images = [
      {
        title: "Jugando al Maincrah",// Primera descripcion del primer video.
        description: "Wtf no te vas a creer lo que pasó",
        imageUrl: "/assets/img/rubius 1.png"
      },
      {
        title: "24 h en directo",//segunda descripcion del degundo video.
        description: "EXTENSIBLE!",
        imageUrl: "/assets/img/rubius 2.png"
      },
      {
        title: "Entrevista",//Tercera descripcion del tercer video.
        description: "Aquí con Auron.",
        imageUrl: "/assets/img/rubius 3.png"
      },
      {
        title: "Bettle Royale",//Cuarta descripcion del Cuarto video
        description: "Fornite (Torneo)",
        imageUrl: "/assets/img/rubius 4.png"
      },{
        title: "Garrys mod",//5nta descripcion del 5nto video.
        description: "Garrys mod con amigos",
        imageUrl: "/assets/img/rubius 5.png"
      },
      {
        title: "Estaba detrás de tigre",//6xta descripcion del sexto video.
        description: "Soy furro XD",
        imageUrl: "/assets/img/rubius 6.png"
      },
      {
        title: "Squid Games",//Septima descripcion del 7mo video.
        description: "Presentación",
        imageUrl: "/assets/img/rubius 7.png"
      },
      {
        title: "Entrevista",//8va descripcion del Octavo video.
        description: "Jordi Wild y el Rubius",
        imageUrl: "/assets/img/rubius 8.png"
      },
      {
        title: "Charlando tranquilamente",//9na descripcion del noveno video
        description: "E de explicaros una cosa",
        imageUrl: "/assets/img/rubius 9.png"
      },
      {
        title: "Juego de miedo ;)",//Decima descripcion del decimo video.
        description: "Noche de terror",
        imageUrl: "/assets/img/rubius 10.png"
      },
    ];

  constructor(private navCtrl: NavController) { }//Constructor del canal.

  ngOnInit() {
  }
  showBackButton: boolean = false;
  nuevoMensaje: string = '';
  toggleBackButton() {//constructor de un verdadero y falso de mensajes.
    this.showBackButton = !this.showBackButton; 
  }
  favoritos(){
    
  }
  hideBackButton() {
    setTimeout(() => {
      this.showBackButton = false;
    }, 10000); // Ocultar el botón después de 10 segundos
  }
  editarPerfil() {
  }
}
