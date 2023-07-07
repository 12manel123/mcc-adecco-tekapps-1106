import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectosPage } from './directos.page';

describe('DirectosPage', () => {
  let component: DirectosPage;
  let fixture: ComponentFixture<DirectosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DirectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
