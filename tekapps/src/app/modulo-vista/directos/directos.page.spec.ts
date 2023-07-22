import { ComponentFixture, TestBed } from '@angular/core/testing';//Testing de directo.
import { DirectosPage } from './directos.page';//Para que la pagina directo funcione bien.

describe('DirectosPage', () => {
  let component: DirectosPage;
  let fixture: ComponentFixture<DirectosPage>;//Descripcion de la pagina directos.

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DirectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();//detector de cambios de la pagina directos.
  }));

  it('should create', () => {
    expect(component).toBeTruthy();//Componente de verdadero o falso de la pagina directos.
  });
});
