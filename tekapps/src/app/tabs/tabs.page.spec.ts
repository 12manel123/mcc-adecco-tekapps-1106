import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;// Dentro de este bloque, se agruparán varias pruebas relacionadas con la funcionalidad de la página TabsPage.

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();//Esta variable permitirá acceder a las propiedades y métodos de la página durante las pruebas.
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();//Esta es una función de inicialización que se ejecutará antes de cada prueba (it) dentro del bloque "TabsPage".
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });//Esta es la prueba real. Aquí se define una prueba específica con el nombre "should create".
});
