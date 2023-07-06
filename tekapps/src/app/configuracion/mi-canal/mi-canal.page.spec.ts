import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiCanalPage } from './mi-canal.page';

describe('MiCanalPage', () => {
  let component: MiCanalPage;
  let fixture: ComponentFixture<MiCanalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiCanalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
