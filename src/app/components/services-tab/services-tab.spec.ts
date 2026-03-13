import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTab } from './services-tab';

describe('ServicesTab', () => {
  let component: ServicesTab;
  let fixture: ComponentFixture<ServicesTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
