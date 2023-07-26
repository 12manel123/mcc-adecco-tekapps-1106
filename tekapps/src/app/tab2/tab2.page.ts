import { Component,OnInit } from '@angular/core';//El decorador Component es una parte esencial de Angular y se utiliza para configurar y definir componentes en la aplicación.
import { HttpClient } from '@angular/common/http';
import User,{UsersService} from '../service/users.service'
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder,FormArray } from '@angular/forms';
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
export class Tab2Page implements OnInit {//Tipos de Exports.
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
  
  
  constructor(private http: HttpClient,private usersService:UsersService,private formBuilder: FormBuilder) {
    this.users=[{
      name: 'Pepito23',
      image: 'https://media.timeout.com/images/105718969/750/422/image.jpg',
      isLive: true,
    }],
    this.formulario = new FormGroup({
      name: new FormControl(),
      image: new FormControl(),
      isLive: new FormControl(),
      direct:new FormControl(),
      directName:new FormControl(),
      grupo:new FormControl(),
      videos: this.formBuilder.array([])
      //videos?:new FormArray([nombre?:new FormControl(); imagen?:newFormControl();  visitas?:newFormControl(); ])
    })
  }
  agregarVideo() {
    const nuevoVideo = this.formBuilder.group({
      nombre: new FormControl(),
      imagen: new FormControl(),
      visitas: new FormControl()
    });

    // Agregamos el nuevo video al FormArray "videos"
    const videosFormArray = this.formulario.get('videos') as FormArray;
    videosFormArray.push(nuevoVideo);
  }


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
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    })
  }
  formulario: FormGroup;
  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.usersService.addUser(this.formulario.value);
    console.log(response);
  }

  users: User[];
  async onClickDelete(user: User) {
    const response = await this.usersService.deleteUser(user);
    console.log(response);
  }
}
