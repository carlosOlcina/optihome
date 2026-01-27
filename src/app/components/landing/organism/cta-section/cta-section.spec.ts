import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LandingCtaSection } from './cta-section'

describe('Header', () => {
  let component: LandingCtaSection
  let fixture: ComponentFixture<LandingCtaSection>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingCtaSection],
    }).compileComponents()

    fixture = TestBed.createComponent(LandingCtaSection)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
