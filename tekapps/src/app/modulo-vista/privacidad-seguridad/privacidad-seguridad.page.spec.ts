import { ComponentFixture, TestBed } from '@angular/core/testing';//Testing de la pagina de seguridad. 
import { PrivacidadSeguridadPage } from './privacidad-seguridad.page';//Para que vaya bien la pagina de seguridad y privacidad.

describe('PrivacidadSeguridadPage', () => {
  let component: PrivacidadSeguridadPage;
  let fixture: ComponentFixture<PrivacidadSeguridadPage>;//Descripcion de la pagina privacidady seguridad.

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrivacidadSeguridadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();//Componentes de la pagina de privacidad de seguridad.
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});//Creacion de componente de verdadero o falso.
