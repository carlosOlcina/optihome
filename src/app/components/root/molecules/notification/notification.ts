import { Component, input } from '@angular/core'
import { CircleAlertIcon, CircleCheckIcon, CircleXIcon, LucideAngularModule } from 'lucide-angular'
import { NotificationEnum } from '../../../../config/enums/notification-enum'

@Component({
  selector: 'app-notification',
  imports: [LucideAngularModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {
  type = input.required<string>()

  circleXIcon = CircleXIcon
  circleCheckIcon = CircleCheckIcon
  circleAlertIcon = CircleAlertIcon

  protected readonly NotificationEnum = NotificationEnum
}
