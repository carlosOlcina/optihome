import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryButtonShared } from './primary-button';

describe('PrimaryButton', () => {
  let component: PrimaryButtonShared;
  let fixture: ComponentFixture<PrimaryButtonShared>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryButtonShared]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryButtonShared);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
