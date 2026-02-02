import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EcosystemSection } from './ecosystem-section'

describe('EcosystemSection', () => {
  let component: EcosystemSection
  let fixture: ComponentFixture<EcosystemSection>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcosystemSection],
    }).compileComponents()

    fixture = TestBed.createComponent(EcosystemSection)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
