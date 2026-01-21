import { Component, input } from '@angular/core'
import { LucideAngularModule, LucideIconData, ShieldIcon } from 'lucide-angular'
import { BrandColorsEnum } from '../../../../config/enums/colors/brand-colors-enum'

@Component({
  selector: 'landing-card',
  imports: [LucideAngularModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class CardLanding {
  icon = input.required<LucideIconData>()
  titleText = input.required<string>()
  descriptionText = input.required<string>()

  protected readonly BrandColorsEnum = BrandColorsEnum
}
