import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SistemaPage } from './sistema.page';

describe('SistemaPage', () => {
  let component: SistemaPage;
  let fixture: ComponentFixture<SistemaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SistemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
