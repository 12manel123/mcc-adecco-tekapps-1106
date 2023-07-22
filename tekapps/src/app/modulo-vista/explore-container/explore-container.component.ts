import { Component, Input } from '@angular/core';//Para que funcione bien el Ionic y el Angular.

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],//Componentes y selectores.
})
export class ExploreContainerComponent {//Export class de la pagina.

  @Input() name?: string;//Imput de la pagina.

}
