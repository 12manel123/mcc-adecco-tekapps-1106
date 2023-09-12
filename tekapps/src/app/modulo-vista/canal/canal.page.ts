import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute para obtener los parámetros de la URL
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer la solicitud HTTP al archivo JSON
@Component({
  selector: 'app-canal',
  templateUrl: './canal.page.html',
  styleUrls: ['./canal.page.scss'],//Componentes de la pagina Canal.
})
export class CanalPage implements OnInit {
  usuarioExistente: string = "Tekapps";
  nombreCanal: string = "User";
  imagen: string = "../assets/img/icon_user.png";
  descripcion: string = "Description";
  banner:string = '';
  suscrito: boolean = false;
  notificaciones: boolean = false;
  isLive: boolean = false; // Inicializa la variable isLive
  direct: string = '';
  directName:string = '';
  category:string = '';
  subs: number = 0;
  users: number = 0;

//Descripción de la pagina canal.
  favoritos: any[] = []; // Array para almacenar los videos favoritos    
  esFavorito(video: any): boolean {
    return this.favoritos.some(item => item.nombre === video.nombre);
  }
  toggleFavorito(video: any): void {
    if (this.esFavorito(video)) {
      this.favoritos = this.favoritos.filter(item => item.nombre !== video.nombre);
    } else {
      this.favoritos.push(video);
    }
  }
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute, // Inyecta ActivatedRoute
    private http: HttpClient
  ) {}
  videos: any[] = [];
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const username = params['username'];
      if (username) {
        this.buscarCanalPorNombre(username);
      }
    });
  }

  buscarCanalPorNombre(username: string): void {
    this.http.get<any[]>('assets/channels.json').subscribe((data) => {
      const canal = data.find((c) => c.name === username);
      if (canal) {
        this.nombreCanal = canal.name;
        this.imagen = canal.image;
        this.descripcion = canal.descripcion;
        this.banner = canal.banner || '';
        this.subs = canal.subs || 0; // Asigna el valor de suscriptores del canal o 0 si no está presente
        this.videos = canal.videos || [];
        this.isLive = canal.isLive || false;
        this.direct = canal.direct || '';
        this.directName = canal.directName || '';
        this.category=canal.category||'';
        this.users = canal.users || 0; 
        this.suscrito = false;
      }
    });
  }
  showBackButton: boolean = false;
  nuevoMensaje: string = '';
  toggleBackButton() {//constructor de un verdadero y falso de mensajes.
    this.showBackButton = !this.showBackButton; 
  }

  editarPerfil() {
  }
  alternarSuscripcion() {
    this.suscrito = !this.suscrito;//Saber si esta subsctiro o no.
  }
  
  alternarNotificaciones() {
    this.notificaciones = !this.notificaciones;//Alternanza de notificaciones.
  }
}
