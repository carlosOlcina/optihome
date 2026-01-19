import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMainSection } from './main-section';

describe('Header', () => {
  let component: LandingMainSection;
  let fixture: ComponentFixture<LandingMainSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingMainSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingMainSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
