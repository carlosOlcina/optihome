import { TestBed } from '@angular/core/testing'
import { NotificationService } from './notification'
import { describe, it, expect, beforeEach } from 'vitest'
import { NotificationEnum } from '../../config/enums/notification-enum'

describe('NotificationService', () => {
  let service: NotificationService

  beforeEach(() => {
    vi.useFakeTimers()
    TestBed.configureTestingModule({
      providers: [NotificationService],
    })
    service = TestBed.inject(NotificationService)
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('should add a notification to the queue', () => {
    const notification = {
      id: '1',
      content: 'Test notification',
      type: NotificationEnum.Success,
    }

    service.setNotification(notification)

    expect(service.getNotification()).toContain(notification)
  })

  it('should remove a notification by id', () => {
    const notification1 = { id: '1', content: 'Notif 1', type: NotificationEnum.Success }
    const notification2 = { id: '2', content: 'Notif 2', type: NotificationEnum.Error }

    service.setNotification(notification1)
    service.setNotification(notification2)
    service.deleteNotification('1')

    const notifications = service.getNotification()
    expect(notifications).not.toContain(notification1)
    expect(notifications).toContain(notification2)
  })

  it('should automatically remove a notification after 5 seconds', () => {
    const notification = {
      id: 'auto-remove',
      content: 'Auto remove test',
      type: NotificationEnum.Warning,
    }

    service.setNotification(notification)

    // Initial check
    expect(service.getNotification()).toContain(notification)

    // TODO fix test
    vi.advanceTimersByTime(5000)

    expect(service.getNotification()).not.toContain(notification)
  })
})
