import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SectionHeaderLanding } from './section-header'

describe('SectionHeader', () => {
  let component: SectionHeaderLanding
  let fixture: ComponentFixture<SectionHeaderLanding>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHeaderLanding],
    }).compileComponents()

    fixture = TestBed.createComponent(SectionHeaderLanding)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
