import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputechTab } from './computech-tab';

describe('ComputechTab', () => {
  let component: ComputechTab;
  let fixture: ComponentFixture<ComputechTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputechTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputechTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
