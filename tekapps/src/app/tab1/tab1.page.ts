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
  categoriasOrdenadas: { categoria: string; conteo: number }[] = []; // Array para almacenar categorías ordenadas

  loadDataFromJson(): void {
    this.http.get<any[]>('assets/channels.json').subscribe((data) => {
      this.directosJson = data.filter(item => item.isLive && item.direct);
      this.categoriasJson = this.directosJson.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
  
      // Usar un conjunto (Set) para evitar duplicados de grupos
      const gruposSet = new Set();
      this.directosJson.forEach((directo) => {
        if (directo.grupo && !gruposSet.has(directo.grupo)) {
          this.gruposJson.push(directo.grupo);
          gruposSet.add(directo.grupo);
        }
      });
  
      this.categoriasOrdenadas = this.countDirectosPorCategoria();
      this.categoriasOrdenadas.sort((a, b) => b.conteo - a.conteo); // Ordenar categorías por cantidad de directos (mayor a menor)
    });
  }
  constructor(private http: HttpClient) {}
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
  }

}
