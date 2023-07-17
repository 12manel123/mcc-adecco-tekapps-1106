import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  directos = [
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
  categorias = [
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
  grupos = [
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
  constructor() {}

}
