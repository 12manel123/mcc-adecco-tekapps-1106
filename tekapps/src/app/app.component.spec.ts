import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';//Esta constante se utiliza en las pruebas para evitar que Angular muestre errores en la consola cuando se encuentren elementos HTML desconocidos. 
import { TestBed } from '@angular/core/testing';//es una utilidad proporcionada por Angular para configurar y crear entornos de pruebas para los componentes.
import { AppComponent } from './app.component';//Esto indica que se está realizando una prueba unitaria para el componente AppComponent.

describe('AppComponent', () => {//Aquí se define un bloque de pruebas (test suite) con el nombre "AppComponent".

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });// Esta es una función de inicialización que se ejecutará antes de cada prueba (it) dentro del bloque "AppComponent". 

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();// Aquí se define una prueba específica con el nombre "should create the app". El cuerpo de esta prueba comprueba si el componente AppComponent se ha creado correctamente.
  });

});
