import { effect, Injectable, signal } from '@angular/core'

/**
 * El NotificationService gestiona una cola de notificaciones. Proporciona métodos para agregar,
 * obtener y eliminar notificaciones, así como para eliminarlas automáticamente
 * después de un tiempo determinado.
 */
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationsQueue = signal<NotificationType[]>([])

  /**
   * Agrega una nueva notificación a la cola de notificaciones.
   *
   * @param {NotificationType} next - La notificación que se agregará a la cola.
   * Actualiza la cola de notificaciones añadiendo la notificación proporcionada.
   */
  setNotification = (next: NotificationType) => {
    this.notificationsQueue.update((notifications) => [...notifications, next])
  }

  /**
   * Un getter que proporciona acceso a la cola de notificaciones de manera de solo lectura.
   *
   * Esta variable expone los datos de las notificaciones como un flujo de solo lectura,
   * asegurando que la cola de notificaciones subyacente no pueda ser modificada directamente
   * por los consumidores.
   *
   * Utiliza esta propiedad para observar y manejar notificaciones sin alterar
   * el estado original de la cola.
   */
  getNotification = this.notificationsQueue.asReadonly()

  /**
   * Elimina una notificación de la cola de notificaciones en base al ID proporcionado.
   *
   * @param {string} id - El identificador único de la notificación que se desea eliminar.
   */
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
