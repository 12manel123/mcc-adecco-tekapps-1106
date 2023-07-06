import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnDirectoPage } from './en-directo.page';

describe('EnDirectoPage', () => {
  let component: EnDirectoPage;
  let fixture: ComponentFixture<EnDirectoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnDirectoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
