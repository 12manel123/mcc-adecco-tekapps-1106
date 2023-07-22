import { ComponentFixture, TestBed } from '@angular/core/testing';//Testing de la pagina sistema
import { SistemaPage } from './sistema.page';//Para que la pagina sistema pueda ser testeada correctamente.

describe('SistemaPage', () => {
  let component: SistemaPage;
  let fixture: ComponentFixture<SistemaPage>;//Descripcion de la pagina sistema.

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SistemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();//Componentes funcionales de la pagina sistema.
  }));

  it('should create', () => {
    expect(component).toBeTruthy();//Componente funcional de Verdadero o falso.
  });
});
