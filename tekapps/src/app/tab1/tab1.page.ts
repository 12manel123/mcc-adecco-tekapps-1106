import { Component } from '@angular/core';//Componente neceario para que Angular funcione. 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']//Componentes de la tab 1 Necesarios. 
})
export class Tab1Page {
  directosJson: any[] = [];
  categoriasJson: any[] = [];
  gruposJson: any[] = [];
  directosPorCategoria: { [categoria: string]: number } = {}; // Objeto para contar directos por categoría

 loadDataFromJson(): void {
    this.http.get<any[]>('assets/channels.json').subscribe((data) => {
      this.directosJson = data.filter(item => item.isLive && item.direct);
      this.categoriasJson = this.directosJson.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
      this.gruposJson = data.filter(item => !item.isLive);
      this.directosPorCategoria = this.countDirectosPorCategoria();
    });
  }
  constructor(private http: HttpClient) {}
  countDirectosPorCategoria(): { [categoria: string]: number } {
    const conteo: { [categoria: string]: number } = {};
    this.categoriasJson.forEach((directo) => {
      if (!conteo[directo.category]) {
        conteo[directo.category] = 1;
      } else {
        conteo[directo.category]++;
      }
    });
    return conteo;
  }

  ngOnInit() {
    this.loadDataFromJson();
  }
  directos = [//Esto es un array de todos los directos
    {
      imagen: 'gameplay1.png',
      titulo: 'Directo 1',
      descripcion: 'Descripción del directo 1',
      route:'juanjito'
    },
    {
      imagen: 'gameplay2.png',
      titulo: 'Directo 2',
      descripcion: 'Descripción del directo 2',
      route:'pepito'
    }
  ];
  categorias = [//Esto es un array de todas las categorias.
    {
      imagen: 'category1.jpg',
      titulo: 'Just Chatting',
      espectadores: 356030,
      type:['IRL','Creative'],
      route:'chating'
    },
    {
      imagen: 'category2.jpg',
      titulo: 'Eventos especiales',
      espectadores: 1943,
      type:['IRL'],
      route:'event'
    }
  ];
  grupos = [//Esto es un array de todos los grupos.
    {
      imagen: 'group1.jpg',
      route:'juegos',
      titulo: 'Juegos',
    },
    {
      imagen: 'group2.jpg',
      route:'juegos',
      titulo: 'Musica',


    },
    {
      imagen: 'group3.jpg',
      route:'vireal',
      titulo: 'Vida Real',

    }
  ];

}
