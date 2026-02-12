import { Component, input } from '@angular/core'
import { LandingCtaSection } from '../cta-section/cta-section'
import { PrimaryButtonShared } from '../../../../share/components/buttons/primary-button/primary-button'
import { Tag } from '../../atoms/tag/tag'
import { SizeEnum } from '../../../../config/enums/size-enum'

@Component({
  selector: 'landing-hero-section',
  imports: [LandingCtaSection, PrimaryButtonShared, Tag],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  linkAction = input.required<() => void>()
  benefitsTags = input.required<TagItem[]>()

  protected readonly SizeEnum = SizeEnum
}
