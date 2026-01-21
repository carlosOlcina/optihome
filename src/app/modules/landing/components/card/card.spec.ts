import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CardLanding } from './card'

describe('Card', () => {
  let component: CardLanding
  let fixture: ComponentFixture<CardLanding>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLanding],
    }).compileComponents()

    fixture = TestBed.createComponent(CardLanding)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
