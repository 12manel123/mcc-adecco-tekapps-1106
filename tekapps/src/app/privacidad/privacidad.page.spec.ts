import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacidadPage } from './privacidad.page';

describe('PrivacidadPage', () => {
  let component: PrivacidadPage;
  let fixture: ComponentFixture<PrivacidadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrivacidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
