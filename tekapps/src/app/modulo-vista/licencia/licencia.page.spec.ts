import { ComponentFixture, TestBed } from '@angular/core/testing';//Testing de la pagina licencia.
import { LicenciaPage } from './licencia.page';//Para que la pagina licencia funcione perfectamente.

describe('LicenciaPage', () => {
  let component: LicenciaPage;
  let fixture: ComponentFixture<LicenciaPage>;//Descripcion de la pagina licencia.

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LicenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));//Detector de cambios de la pagina licencia.

  it('should create', () => {
    expect(component).toBeTruthy();
  });//Componente del modulo verdadero o falso de la pagina licencia.
});
