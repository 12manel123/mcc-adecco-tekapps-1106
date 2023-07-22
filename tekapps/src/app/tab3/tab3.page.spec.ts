import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';// Se importa el módulo IonicModule del paquete @ionic/angular. IonicModule
import { ExploreContainerComponentModule } from '../modulo-vista/explore-container/explore-container.module';//Este módulo probablemente contiene componentes o funcionalidades adicionales necesarias para la prueba del componente Tab3Page.
import { Tab3Page } from './tab3.page';// Esto permite utilizar el componente en la prueba.

describe('Tab3Page', () => {//Aquí se define una suite de pruebas para el componente Tab3Page.
  let component: Tab3Page;//Se declara una variable component del tipo Tab3Page, que se utilizará para acceder al componente en las pruebas.
  let fixture: ComponentFixture<Tab3Page>;//Se declara una variable fixture del tipo ComponentFixture<Tab3Page>.

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab3Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();// Se proporcionan las declaraciones y los módulos de importación necesarios para la prueba.
    

    fixture = TestBed.createComponent(Tab3Page);//Se crea una instancia del componente Tab3Page.
    component = fixture.componentInstance;// Se asigna la instancia del componente creada anteriormente a la variable 
    fixture.detectChanges();//Se detectan los cambios del componente. 
  });

  it('should create', () => {
    expect(component).toBeTruthy();//Esta prueba verifica si el componente se crea correctamente.

    expect(component).toBeTruthy();//En esta línea, se utiliza la función expect para verificar si el componente (component) es "verdadero" (toBeTruthy()) o existe.
  });
});
