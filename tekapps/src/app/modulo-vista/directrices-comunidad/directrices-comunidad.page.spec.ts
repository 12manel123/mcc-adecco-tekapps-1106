import { ComponentFixture, TestBed } from '@angular/core/testing';//Testing de la pagina directrices.
import { DirectricesComunidadPage } from './directrices-comunidad.page';//Para que la pagina directrices funcione. 

describe('DirectricesComunidadPage', () => {
  let component: DirectricesComunidadPage;
  let fixture: ComponentFixture<DirectricesComunidadPage>;//Descripcion de la pagina directrices.

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DirectricesComunidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();//Detector de cambios de la pagina.
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});// Componente de verdadero o falso de la pagina directrices.
