import { ComponentFixture, TestBed } from '@angular/core/testing';//Testing de la pagina de registro.
import { RegisterPage } from './register.page';//Para que la pagina de registro funcione.

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;// Descripcion de la pagina registro.

  beforeEach(async (() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();//Cambios detectados en el cmd de la pagina Register.
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});//Componente falso y verdadero del cmd de la pagina registro.
