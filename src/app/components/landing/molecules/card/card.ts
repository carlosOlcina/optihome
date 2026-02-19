import { Component, input } from '@angular/core'
import { LucideAngularModule, LucideIconData } from 'lucide-angular'
import { BrandColorsEnum } from '../../../../config/enums/colors/brand-colors-enum'
import { TitleH3Landing } from '../../atoms/title-h3/title-h3'
import { ParagraphLanding } from '../../atoms/paragraph/paragraph'

@Component({
  selector: 'landing-card',
  imports: [LucideAngularModule, TitleH3Landing, ParagraphLanding],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class CardLanding {
  icon = input.required<LucideIconData>()
  titleText = input.required<string>()
  descriptionText = input.required<string>()

  protected readonly BrandColorsEnum = BrandColorsEnum
}
