import { Component, ElementRef, ViewChild } from '@angular/core'
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

  @ViewChild('scrollContainer', { read: ElementRef })
  private readonly scrollContainer?: ElementRef<HTMLElement>

  private scrollByAmount(amount: number) {
    const el = this.scrollContainer?.nativeElement
    if (!el) return

    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  scrollLeft = () => this.scrollByAmount(-320)
  scrollRight = () => this.scrollByAmount(320)
}
