import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectricesComunidadPage } from './directrices-comunidad.page';

describe('DirectricesComunidadPage', () => {
  let component: DirectricesComunidadPage;
  let fixture: ComponentFixture<DirectricesComunidadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DirectricesComunidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
