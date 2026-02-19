import { Component, input } from '@angular/core'
import { ChevronRightIcon, LucideAngularModule } from 'lucide-angular'
import { NgOptimizedImage } from '@angular/common'
import { RouterLink } from '@angular/router'
import { TitleH3Landing } from '../../atoms/title-h3/title-h3'
import { BrandColorsEnum } from '../../../../config/enums/colors/brand-colors-enum'

@Component({
  selector: 'landing-product-card',
  imports: [LucideAngularModule, NgOptimizedImage, RouterLink, TitleH3Landing],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardLanding {
  imageUrl = input.required<string>()
  imageAlt = input.required<string>()

  titleContent = input.required<string>()

  urlContent = input.required<string>()
  urlPath = input.required<string>()

  protected readonly chevronRightIcon = ChevronRightIcon
  protected readonly BrandColorsEnum = BrandColorsEnum
}
