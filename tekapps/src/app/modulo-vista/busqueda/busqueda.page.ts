import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['titulo'];
      // Realiza la búsqueda inicial utilizando this.searchQuery si es necesario
    });
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
