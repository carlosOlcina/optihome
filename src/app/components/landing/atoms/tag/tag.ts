import { Component, input } from '@angular/core'
import { LucideAngularModule, LucideIconData } from 'lucide-angular'
import { BrandColorsEnum } from '../../../../config/enums/colors/brand-colors-enum'

@Component({
  selector: 'landing-tag',
  imports: [LucideAngularModule],
  templateUrl: './tag.html',
  styleUrl: './tag.css',
})
export class Tag {
  icon = input<LucideIconData>()
  role = input<string>()
  protected readonly BrandColorsEnum = BrandColorsEnum
}
