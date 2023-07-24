import { Component } from '@angular/core';//El decorador Component es una parte esencial de Angular y se utiliza para configurar y definir componentes en la aplicación.
import { HttpClient } from '@angular/common/http';
interface VideoInfo {
  usuario: string;
  videoMasVisitado: {
    nombre: string;
    imagen: string;
    visitas: number;
  };
}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']// Componente, que en este caso es el tab 2.
})
export class Tab2Page {//Tipos de Exports.
  directosJson: any[] = [];
  categoriasJson: any[] = [];
  categoriasOrdenadas: { categoria: string; conteo: number }[] = [];
  videosJson: VideoInfo[] = []; // Array para almacenar la información de los videos

  loadDataFromJson(): void {
    this.http.get<any[]>('assets/channels.json').subscribe((data) => {
      this.directosJson = data.filter(item => item.isLive && item.direct);
      this.categoriasJson = this.directosJson.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
      this.categoriasOrdenadas = this.countDirectosPorCategoria();
      this.categoriasOrdenadas.sort((a: { categoria: string; conteo: number }, b: { categoria: string; conteo: number }) => b.conteo - a.conteo);
  
      // Obtener información de los videos (nombre, imagen, usuario y visitas) desde el JSON
      this.videosJson = data
      .filter(item => item.videos) // Filtrar los elementos que tienen la propiedad "videos"
      .map(item => {
        if (item.videos.length === 1) {
          return {
            usuario: item.name,
            videoMasVisitado: {
              nombre: item.videos[0].nombre,
              imagen: item.videos[0].imagen,
              visitas: item.videos[0].visitas
            }
          };
        } else {
          const videoMasVisitado = item.videos.reduce((prev: { nombre: string; imagen: string; visitas: number }, current: { nombre: string; imagen: string; visitas: number }) => (prev.visitas > current.visitas ? prev : current));
          return {
            usuario: item.name,
            videoMasVisitado: {
              nombre: videoMasVisitado.nombre,
              imagen: videoMasVisitado.imagen,
              visitas: videoMasVisitado.visitas
            }
          };
        }
      });


  
      // Ordenar los videosJson por cantidad de visitas del videoMasVisitado (mayor a menor)
      this.videosJson.sort((a: VideoInfo, b: VideoInfo) => b.videoMasVisitado.visitas - a.videoMasVisitado.visitas);
    });
  }
  
  
  constructor(private http: HttpClient) {}
  countDirectosPorCategoria(): { categoria: string; conteo: number }[] {
    const conteo: { [categoria: string]: number } = {};
    this.directosJson.forEach((directo) => {
      if (directo.category) {
        if (!conteo[directo.category]) {
          conteo[directo.category] = 1;
        } else {
          conteo[directo.category]++;
        }
      }
    });

    // Convertir el objeto de conteo en un array de objetos {categoria: string, conteo: number}
    const categoriasConConteo: { categoria: string; conteo: number }[] = [];
    for (const categoria in conteo) {
      categoriasConConteo.push({ categoria, conteo: conteo[categoria] });
    }

    return categoriasConConteo;
  }

  ngOnInit() {
    this.loadDataFromJson();
  }

}
