import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacidadSeguridadPage } from './privacidad-seguridad.page';

describe('PrivacidadSeguridadPage', () => {
  let component: PrivacidadSeguridadPage;
  let fixture: ComponentFixture<PrivacidadSeguridadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrivacidadSeguridadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
