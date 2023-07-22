import { Component } from '@angular/core';//El decorador Component es una parte esencial de Angular y se utiliza para configurar y definir componentes en la aplicación.

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']// Componente, que en este caso es el tab 2.
})
export class Tab2Page {//Tipos de Exports.

  directos = [
    {
      imagen: 'gameplay1.png',
      titulo: 'Directo 1',
      descripcion: 'Descripción del directo 1',
      route:'juanjito'//Descripciones de los directos
    },
    {
      imagen: 'gameplay2.png',
      titulo: 'Directo 2',
      descripcion: 'Descripción del directo 2',
      route:'pepito'// Descripciones de los directos.
    }
  ];
  categorias = [
    {
      imagen: 'category1.jpg',
      titulo: 'Just chating',
      espectadores: 356030,
      type:['IRL','Creative'],
      route:'chating'//Descripciones de las categorias.
    },
    {
      imagen: 'category2.jpg',
      titulo: 'Eventos especiales',
      espectadores: 1943,
      type:['IRL'],
      route:'event'//Descripciones de las categorias.
    }
  ];
  grupos = [
    {
      imagen: 'group1.jpg',
      route:'juegos'//Descripciones de los juegos
    },
    {
      imagen: 'group2.jpg',
      route:'juegos'//Descripciones de los juegos

    },
    {
      imagen: 'group3.jpg',
      route:'vireal'//Descripciones de los juegos
    }
  ];
  constructor() {}//No hay constructor.

}
