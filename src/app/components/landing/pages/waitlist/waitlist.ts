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

@Component({
  selector: 'landing-waitlist',
  imports: [LandingCtaSection, PrimaryButtonShared, FormsModule, NgClass, FormField, ParagraphLanding],
  templateUrl: './waitlist.html',
  styleUrl: './waitlist.css',
})
export class Waitlist {
  protected readonly SizeEnum = SizeEnum
  notificationService = inject(NotificationService)

  subscribers = signal(0)

  suscribeModel = signal<SuscribeData>({
    email: '',
  })

  suscribeForm = form(this.suscribeModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Es necesario introducir un email' })
    email(schemaPath.email, { message: 'Es necesario introducir un email' })
  })

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

  buttonAction() {
    /* empty */
  }
}
