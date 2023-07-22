import { ComponentFixture, TestBed } from '@angular/core/testing';//Estas clases son necesarias para configurar y ejecutar las pruebas unitarias en Angular.
import { IonicModule } from '@ionic/angular';// contiene las funcionalidades y componentes esenciales para una aplicación Ionic.
import { ExploreContainerComponentModule } from '../modulo-vista/explore-container/explore-container.module';//Este módulo probablemente contiene componentes o funcionalidades adicionales necesarias para el funcionamiento de Tab1Page.
import { Tab1Page } from './tab1.page';//Se importa el componente Tab1Page desde el archivo tab1.page.ts.

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;//Componentes para que funcione el Tab 1.

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();//Imports y declaraciones del tab 1.

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();//Testing del tab1
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });//Componentes con variable de cierto o falso. 
});
