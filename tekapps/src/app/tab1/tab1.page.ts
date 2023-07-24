import { Component } from '@angular/core';//Componente neceario para que Angular funcione. 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']//Componentes de la tab 1 Necesarios. 
})
export class Tab1Page {
  
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
  constructor(private http: HttpClient) {}

}
