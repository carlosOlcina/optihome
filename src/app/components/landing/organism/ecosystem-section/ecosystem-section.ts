import { Component } from '@angular/core'
import { ProductCardLanding } from '../../molecules/product-card/product-card'
import { SectionHeaderLanding } from '../../molecules/section-header/section-header'
import ecosystemProducts from '../../../../data/landing/ecosystem-products'
import { ButtonChevron } from '../../../../share/components/buttons/button-chevron/button-chevron'

@Component({
  selector: 'landing-ecosystem-section',
  imports: [ProductCardLanding, SectionHeaderLanding, ButtonChevron],
  templateUrl: './ecosystem-section.html',
  styleUrl: './ecosystem-section.css',
})
export class EcosystemSection {
  protected readonly ecosystemProducts = ecosystemProducts
  onClick() {
    console.log('onClick')
  }
}
