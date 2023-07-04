import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CerrarSesionPage } from './cerrar-sesion.page';

describe('CerrarSesionPage', () => {
  let component: CerrarSesionPage;
  let fixture: ComponentFixture<CerrarSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CerrarSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
