import { Component, signal } from '@angular/core'
import { LandingCtaSection } from '../../organism/cta-section/cta-section'
import { PrimaryButtonShared } from '../../../../share/components/buttons/primary-button/primary-button'
import { SizeEnum } from '../../../../config/enums/size-enum'
import { FormsModule } from '@angular/forms'
import { email, form, FormField, required, submit } from '@angular/forms/signals'
import { NgClass } from '@angular/common'
import { ParagraphLanding } from '../../atoms/paragraph/paragraph'

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

  subscribers = signal(0)

  suscribeModel = signal<SuscribeData>({
    email: '',
  })

  suscribeForm = form(this.suscribeModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Es necesario introducir un emailo' })
    email(schemaPath.email, { message: 'Es necesario introducir un email' })
  })

  onSubmit(event: Event) {
    event.preventDefault()
    submit(this.suscribeForm, async () => {
      console.log(this.suscribeForm().invalid())
      if (this.suscribeForm().invalid()) {
        console.log('invalid')
        return
      } else {
        this.subscribers.update((value: number) => value + 1)
      }
    }).then()
  }

  buttonAction() {
    /* empty */
  }
}
