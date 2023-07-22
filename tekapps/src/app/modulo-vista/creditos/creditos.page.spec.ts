import { ComponentFixture, TestBed } from '@angular/core/testing';//Testing de la pagina creditos.
import { CreditosPage } from './creditos.page';//Pagina creditos, para que funcione cirrectamente.

describe('CreditosPage', () => {
  let component: CreditosPage;
  let fixture: ComponentFixture<CreditosPage>;//Descripcion de la pagina creditos.

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreditosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();//Componentes y cambios de la pagina creditos.
  }));

  it('should create', () => {
    expect(component).toBeTruthy();// Verdadero y falso, componente de la pagina creditos.
  });
});
