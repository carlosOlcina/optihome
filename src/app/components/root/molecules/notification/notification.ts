import { Component, input } from '@angular/core'
import { CircleAlertIcon, CircleCheckIcon, CircleXIcon, LucideAngularModule } from 'lucide-angular'
import { NotificationEnum } from '../../../../config/enums/notification-enum'

/**
 * Representa un componente de notificación del sistema utilizado para proporcionar retroalimentación al usuario.
 *
 * Admite diferentes tipos de notificaciones (por ejemplo, éxito, error, alerta)
 * y muestra un icono apropiado según el tipo.
 */
@Component({
  selector: 'app-notification',
  imports: [LucideAngularModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {
  /**
   * El tipo de notificación a mostrar.
   * Los valores típicos se definen en NotificationEnum.
   */
  type = input.required<string>()

  circleXIcon = CircleXIcon
  circleCheckIcon = CircleCheckIcon
  circleAlertIcon = CircleAlertIcon

  protected readonly NotificationEnum = NotificationEnum
}
