import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilTab } from './accueil-tab';

describe('AccueilTab', () => {
  let component: AccueilTab;
  let fixture: ComponentFixture<AccueilTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
