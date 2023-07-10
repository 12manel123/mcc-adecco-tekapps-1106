import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  searchQuery: string = '';
searchResults: string[] = [];
  performSearch(): void {
   
    this.searchResults = []; 
    setTimeout(() => {
  
      const allResults = [
        'Minecraft',
        '12Manel123',
        'Valorant',
        'Fornite',
        'JuanJose',
        'JuanVegas',
        'Manel24',
        'Charlando',
        'Illojuan',
        'Juanito123',
        'Manelxtrem',
        'Manel202',
      ];
      const searchQuery = this.searchQuery.toLowerCase();
      this.searchResults = allResults.filter(result => result.toLowerCase().includes(this.searchQuery.toLowerCase()));
      
    }, 1000);
  }
  }
