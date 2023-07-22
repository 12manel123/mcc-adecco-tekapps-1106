import { ComponentFixture, TestBed } from '@angular/core/testing';//Testing de la pagina componente.
import { IonicModule } from '@ionic/angular';//Para que funcione la pagina del componente.

import { ExploreContainerComponent } from './explore-container.component';//Para que la pagina y el componente funcionen bien.

describe('ExploreContainerComponent', () => {
  let component: ExploreContainerComponent;
  let fixture: ComponentFixture<ExploreContainerComponent>;//Descripcion de la pagina del componente.

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreContainerComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();//Detector de la pagina del componente.

    fixture = TestBed.createComponent(ExploreContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();//Test de la pagina.
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });//Test de verdadero o falso de la pagina.
});
