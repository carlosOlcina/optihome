import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Waitlist } from './waitlist'
import { NotificationService } from '../../../../services/root/notification'
import { NotificationEnum } from '../../../../config/enums/notification-enum'
import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('Waitlist', () => {
  let component: Waitlist
  let fixture: ComponentFixture<Waitlist>
  let notificationService: NotificationService

  beforeEach(async () => {
    notificationService = {
      setNotification: vi.fn(),
      getNotification: vi.fn(),
      deleteNotification: vi.fn(),
    } as unknown as NotificationService

    await TestBed.configureTestingModule({
      imports: [Waitlist],
      providers: [{ provide: NotificationService, useValue: notificationService }],
    }).compileComponents()

    fixture = TestBed.createComponent(Waitlist)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should increment subscribers when form is valid and submitted', async () => {
    // Arrange
    const initialSubscribers = component.subscribers()
    component.suscribeModel.set({ email: 'test@example.com' })

    // Act
    const formElement = fixture.nativeElement.querySelector('form')
    formElement.dispatchEvent(new Event('submit'))

    // Wait for async submit
    await fixture.whenStable()

    // Assert
    expect(component.subscribers()).toBe(initialSubscribers + 1)
  })

  it('should show error notification when form is invalid and submitted', () => {
    // Arrange
    component.suscribeModel.set({ email: 'invalid-email' })

    // Act
    const event = new Event('submit')
    component.onSubmit(event)

    // Assert
    expect(notificationService.setNotification).toHaveBeenCalledWith(
      expect.objectContaining({
        content: 'Es necesario introducir un email',
        type: NotificationEnum.Error,
      }),
    )
    expect(component.subscribers()).toBe(0)
  })

  it('should show error notification when email is empty', () => {
    // Arrange
    component.suscribeModel.set({ email: '' })

    // Act
    const event = new Event('submit')
    component.onSubmit(event)

    // Assert
    expect(notificationService.setNotification).toHaveBeenCalledWith(
      expect.objectContaining({
        content: 'Es necesario introducir un email',
        type: NotificationEnum.Error,
      }),
    )
  })
})
