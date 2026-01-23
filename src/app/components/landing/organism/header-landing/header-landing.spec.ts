import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderLanding } from './header-landing'

describe('HeaderLanding', () => {
  let component: HeaderLanding
  let fixture: ComponentFixture<HeaderLanding>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLanding],
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderLanding)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
