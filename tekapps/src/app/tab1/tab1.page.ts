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
    }
  ];
  constructor() {}

}
