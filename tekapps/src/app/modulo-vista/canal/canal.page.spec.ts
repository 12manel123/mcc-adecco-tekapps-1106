import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanalPage } from './canal.page';

describe('CanalPage', () => {
  let component: CanalPage;
  let fixture: ComponentFixture<CanalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CanalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
