import { Component, inject, signal } from '@angular/core'
import { LandingCtaSection } from '../../organism/cta-section/cta-section'
import { PrimaryButtonShared } from '../../../../share/components/buttons/primary-button/primary-button'
import { SizeEnum } from '../../../../config/enums/size-enum'
import { FormsModule } from '@angular/forms'
import { email, form, FormField, required, submit } from '@angular/forms/signals'
import { NgClass } from '@angular/common'
import { ParagraphLanding } from '../../atoms/paragraph/paragraph'
import { NotificationService } from '../../../../services/root/notification'
import { NotificationEnum } from '../../../../config/enums/notification-enum'

interface SuscribeData {
  email: string
}

/**
 * Representa la página de registro de la lista de espera.
 *
 * Proporciona un formulario para que los usuarios se suscriban ingresando su correo electrónico,
 * y gestiona la validación y los comentarios de envío a través de notificaciones del sistema.
 */
@Component({
  selector: 'landing-waitlist',
  imports: [LandingCtaSection, PrimaryButtonShared, FormsModule, NgClass, FormField, ParagraphLanding],
  templateUrl: './waitlist.html',
  styleUrl: './waitlist.css',
})
export class Waitlist {
  protected readonly SizeEnum = SizeEnum

  /**
   * Servicio utilizado para mostrar notificaciones de éxito o error al usuario.
   */
  notificationService = inject(NotificationService)

  /**
   * Señal que rastrea el número actual de suscriptores.
   */
  subscribers = signal(0)

  /**
   * Señal que contiene los datos del formulario de suscripción.
   */
  suscribeModel = signal<SuscribeData>({
    email: '',
  })

  /**
   * Objeto de formulario con reglas de validación para el correo electrónico de suscripción.
   */
  suscribeForm = form(this.suscribeModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Es necesario introducir un email' })
    email(schemaPath.email, { message: 'Es necesario introducir un email' })
  })

  /**
   * Gestiona el evento de envío del formulario.
   * Valida el formulario y muestra notificaciones en caso de error o actualiza el recuento de suscriptores en caso de éxito.
   *
   * @param event El evento de envío del DOM.
   */
  onSubmit(event: Event) {
    event.preventDefault()

    if (this.suscribeForm().invalid()) {
      this.suscribeForm()
        .errorSummary()
        .forEach((e) => {
          this.notificationService.setNotification({
            id: crypto.randomUUID(),
            content: e.message || 'Error desconocido',
            type: NotificationEnum.Error,
          })
        })
    }

    submit(this.suscribeForm, async () => {
      this.subscribers.update((value: number) => value + 1)
    }).then()
  }

  /**
   * Espacio reservado para futuras acciones de botones.
   */
  buttonAction() {
    /* empty */
  }
}
