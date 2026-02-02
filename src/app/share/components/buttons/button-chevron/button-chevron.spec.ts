import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ButtonChevron } from './button-chevron'

describe('ButtonChevron', () => {
  let component: ButtonChevron
  let fixture: ComponentFixture<ButtonChevron>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonChevron],
    }).compileComponents()

    fixture = TestBed.createComponent(ButtonChevron)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
