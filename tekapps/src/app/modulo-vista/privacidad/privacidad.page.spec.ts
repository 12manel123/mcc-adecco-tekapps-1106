import { ComponentFixture, TestBed } from '@angular/core/testing';// Testing de la pagina a través de la consola.
import { PrivacidadPage } from './privacidad.page';//Para que la pagina privacidad esté bien enrutada y funcione.

describe('PrivacidadPage', () => {
  let component: PrivacidadPage;
  let fixture: ComponentFixture<PrivacidadPage>;// Descripcion de las funcionalidades de la pagina.

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrivacidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();// Testing y componentes de la pagina privacidad.
  }));

  it('should create', () => {
    expect(component).toBeTruthy();// componente de verdadero o falso de la página.
  });
});
