import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformatiqueTab } from './informatique-tab';

describe('InformatiqueTab', () => {
  let component: InformatiqueTab;
  let fixture: ComponentFixture<InformatiqueTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformatiqueTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformatiqueTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
