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

  nombreCanal: string = "User";
  imagen: string = "../assets/img/User.png";
  descripcion: string = "Description";
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
        this.videos = canal.videos || []; // Asigna los videos del canal o un array vacío si no hay videos
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
}
