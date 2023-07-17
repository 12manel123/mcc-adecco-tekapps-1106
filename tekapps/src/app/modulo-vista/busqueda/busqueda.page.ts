// busqueda.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer la solicitud HTTP al archivo JSON

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['titulo'];
      // Realiza la búsqueda inicial utilizando this.searchQuery si es necesario
      this.performSearch(); // Realiza la búsqueda inicial al cargar la página
    });
  }

  searchQuery: string = '';
  searchResults: any[] = [];

  performSearch(): void {
    this.searchResults = []; // Limpia los resultados antes de realizar una nueva búsqueda
    this.http.get<any[]>('assets/channels.json').subscribe((data) => {
      const allResults = data;
      const searchQuery = this.searchQuery.toLowerCase();
      this.searchResults = allResults.filter(
        (result) =>
          result.name.toLowerCase().includes(searchQuery) ||
          result.category.toLowerCase().includes(searchQuery)
      );
    });
  }
}
