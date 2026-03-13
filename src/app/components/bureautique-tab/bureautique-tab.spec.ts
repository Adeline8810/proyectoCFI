import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureautiqueTab } from './bureautique-tab';

describe('BureautiqueTab', () => {
  let component: BureautiqueTab;
  let fixture: ComponentFixture<BureautiqueTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BureautiqueTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BureautiqueTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
