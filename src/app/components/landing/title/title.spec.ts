import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TitleLanding } from './title'

describe('Title', () => {
  let component: TitleLanding
  let fixture: ComponentFixture<TitleLanding>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleLanding],
    }).compileComponents()

    fixture = TestBed.createComponent(TitleLanding)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
