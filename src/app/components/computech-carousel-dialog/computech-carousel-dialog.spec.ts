import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputechCarouselDialog } from './computech-carousel-dialog';

describe('ComputechCarouselDialog', () => {
  let component: ComputechCarouselDialog;
  let fixture: ComponentFixture<ComputechCarouselDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputechCarouselDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputechCarouselDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
