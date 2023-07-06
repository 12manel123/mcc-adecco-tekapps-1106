import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicenciaPage } from './licencia.page';

describe('LicenciaPage', () => {
  let component: LicenciaPage;
  let fixture: ComponentFixture<LicenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LicenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
