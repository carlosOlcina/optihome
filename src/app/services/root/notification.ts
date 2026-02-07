import { effect, Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationsQueue = signal<NotificationType[]>([])

  setNotification = (next: NotificationType) => {
    this.notificationsQueue.update((notifications) => [...notifications, next])
  }

  getNotification = this.notificationsQueue.asReadonly()

  deleteNotification = (id: string) => {
    this.notificationsQueue.update((notifications) => [...notifications].filter((n) => n.id !== id))
  }

  constructor() {
    effect(() => {
      const notifications = this.notificationsQueue()

      if (notifications && notifications.length > 0) {
        const id = notifications[notifications.length - 1].id
        setTimeout(() => {
          this.deleteNotification(id)
        }, 5000)
      }
    })
  }
}
