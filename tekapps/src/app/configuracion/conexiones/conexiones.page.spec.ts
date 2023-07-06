import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConexionesPage } from './conexiones.page';

describe('ConexionesPage', () => {
  let component: ConexionesPage;
  let fixture: ComponentFixture<ConexionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConexionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
