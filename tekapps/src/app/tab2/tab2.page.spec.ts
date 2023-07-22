import { ComponentFixture, TestBed } from '@angular/core/testing';//Estas clases son necesarias para configurar y ejecutar las pruebas unitarias en Angular.
import { IonicModule } from '@ionic/angular';//contiene las funcionalidades y componentes esenciales para una aplicación Ionic.
import { ExploreContainerComponentModule } from '../modulo-vista/explore-container/explore-container.module';// Este módulo probablemente contiene componentes o funcionalidades adicionales necesarias para el funcionamiento de Tab2Page.
import { Tab2Page } from './tab2.page';//Se importa el componente Tab2Page desde el archivo tab2.page.ts.

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;// Componentes para que el tab 2 funcione.

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();// Configuracion de tab 2.

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();// Componentes del tab 2.
  });

  it('should create', () => {
    expect(component).toBeTruthy();// COmponente que hace funcionar si la aplicación es facil o dificil.
  });
});
