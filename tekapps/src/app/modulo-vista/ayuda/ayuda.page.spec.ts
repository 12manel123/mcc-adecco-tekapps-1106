import { ComponentFixture, TestBed } from '@angular/core/testing';//Testing de la pagina ayuda.
import { AyudaPage } from './ayuda.page';//La pagina ayuda, para que funcione en consola.

describe('AyudaPage', () => {
  let component: AyudaPage;
  let fixture: ComponentFixture<AyudaPage>;//Descripcion de la pagina ayuda y sus componentes.

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AyudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();// Componente creado de ayuda.
  }));

  it('should create', () => {
    expect(component).toBeTruthy();//Componente que interactua entre verdadero y falso.
  });
});
