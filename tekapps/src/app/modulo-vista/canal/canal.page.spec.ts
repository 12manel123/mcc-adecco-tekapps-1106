import { ComponentFixture, TestBed } from '@angular/core/testing';//Test de la pagina del canal.
import { CanalPage } from './canal.page';//Para que la pagina canal funcione.

describe('CanalPage', () => {
  let component: CanalPage;
  let fixture: ComponentFixture<CanalPage>;//Descripcion del canal.

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CanalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();//Detector de cambios del canal.
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//Componente de verdadero y falso del Cmd.