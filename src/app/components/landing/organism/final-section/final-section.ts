import { Component, input } from '@angular/core'
import { LandingCtaSection } from '../cta-section/cta-section'
import { PrimaryButtonShared } from '../../../../share/components/buttons/primary-button/primary-button'
import { Tag } from '../../atoms/tag/tag'
import { SizeEnum } from '../../../../config/enums/size-enum'

@Component({
  selector: 'landing-final-section',
  imports: [LandingCtaSection, PrimaryButtonShared, Tag],
  templateUrl: './final-section.html',
  styleUrl: './final-section.css',
})
export class FinalSection {
  actionInput = input.required<() => void>()
  benefitTags = input.required<TagItem[]>()

  protected readonly SizeEnum = SizeEnum
}
