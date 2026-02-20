import { Component, inject } from '@angular/core'
import { Notification } from '../../molecules/notification/notification'
import { NotificationService } from '../../../../services/root/notification'

/**
 * Componente contenedor que muestra las notificaciones activas del sistema.
 *
 * Inyecta el NotificationService para acceder a la lista actual de
 * notificaciones y las renderiza utilizando la molécula Notification.
 */
@Component({
  selector: 'app-notifications',
  imports: [Notification],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  /**
   * Servicio utilizado para gestionar y recuperar las notificaciones actuales.
   */
  notificationService = inject(NotificationService)
}
