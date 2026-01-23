import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TitleH2Landing } from './title-h2'

describe('Title', () => {
  let component: TitleH2Landing
  let fixture: ComponentFixture<TitleH2Landing>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleH2Landing],
    }).compileComponents()

    fixture = TestBed.createComponent(TitleH2Landing)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
