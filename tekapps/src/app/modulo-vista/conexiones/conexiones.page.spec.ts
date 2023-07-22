import { ComponentFixture, TestBed } from '@angular/core/testing';//Test de la pagina conexiones.
import { ConexionesPage } from './conexiones.page';//Para que la pagina conexiones funcione. 

describe('ConexionesPage', () => {
  let component: ConexionesPage;
  let fixture: ComponentFixture<ConexionesPage>;//Descripcion de la pagina conexiones.

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConexionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));//Componentes de la pagina conexiones.

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});// Componente de verdadero o falso de la pagina conexiones.
