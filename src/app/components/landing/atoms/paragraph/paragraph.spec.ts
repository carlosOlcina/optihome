import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ParagraphLanding } from './paragraph'

describe('Paragraph', () => {
  let component: ParagraphLanding
  let fixture: ComponentFixture<ParagraphLanding>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParagraphLanding],
    }).compileComponents()

    fixture = TestBed.createComponent(ParagraphLanding)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
