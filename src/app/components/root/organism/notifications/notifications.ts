import { Component, inject } from '@angular/core'
import { Notification } from '../../molecules/notification/notification'
import { NotificationService } from '../../../../services/root/notification'

@Component({
  selector: 'app-notifications',
  imports: [Notification],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notificationService = inject(NotificationService)
}
