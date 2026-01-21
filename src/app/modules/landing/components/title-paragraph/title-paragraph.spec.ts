import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleParagraphLanding } from './title-paragraph';

describe('TitleParagraph', () => {
  let component: TitleParagraphLanding;
  let fixture: ComponentFixture<TitleParagraphLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleParagraphLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleParagraphLanding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
