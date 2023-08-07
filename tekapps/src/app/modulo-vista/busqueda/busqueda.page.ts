import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer la solicitud HTTP al archivo JSON
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient, private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['titulo'];
      // Realiza la búsqueda inicial utilizando this.searchQuery si es necesario
      this.performSearch(); // Realiza la búsqueda inicial al cargar la página
    });
  }

  searchQuery: string = '';
  searchResults: any[] = [];//Resultado de las pagina busqueda.

  performSearch(): void {
    this.searchResults = [];
    this.http.get<any[]>('assets/channels.json').subscribe((data) => {
      const allResults = data;
      const searchQuery = this.searchQuery.toLowerCase();
      this.searchResults = allResults.filter(
        (result) =>
          result.name.toLowerCase().includes(searchQuery) ||
          (result.category && result.category.toLowerCase().includes(searchQuery)) ||
          (result.grupo && result.grupo.toLowerCase().includes(searchQuery))// Filtrar por categoría solo si existe una categoría definida
      );
      this.sortChannelsByLiveStatus();
      this.cdr.detectChanges();
    });
  }
  sortChannelsByLiveStatus(): void {
    this.searchResults.sort((a, b) => {
      if (a.isLive && !b.isLive) {
        return -1; // a viene primero (está en directo), b viene después
      } else if (!a.isLive && b.isLive) {
        return 1; // b viene primero (está en directo), a viene después
      } else {
        return 0; // no cambia el orden entre a y b
      }
    });
  }
}
