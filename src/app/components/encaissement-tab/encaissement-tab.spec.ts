import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncaissementTab } from './encaissement-tab';

describe('EncaissementTab', () => {
  let component: EncaissementTab;
  let fixture: ComponentFixture<EncaissementTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncaissementTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncaissementTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
