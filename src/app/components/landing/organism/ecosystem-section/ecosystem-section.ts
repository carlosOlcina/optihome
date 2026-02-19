import { Component, ElementRef, signal, ViewChild, AfterViewInit, PLATFORM_ID, inject } from '@angular/core'
import { ProductCardLanding } from '../../molecules/product-card/product-card'
import { SectionHeaderLanding } from '../../molecules/section-header/section-header'
import ecosystemProducts from '../../../../data/landing/ecosystem-products'
import { ButtonChevron } from '../../../../share/components/buttons/button-chevron/button-chevron'
import { isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'landing-ecosystem-section',
  imports: [ProductCardLanding, SectionHeaderLanding, ButtonChevron],
  templateUrl: './ecosystem-section.html',
  styleUrl: './ecosystem-section.css',
})
export class EcosystemSection implements AfterViewInit {
  private platformId = inject(PLATFORM_ID)

  protected readonly ecosystemProducts = ecosystemProducts

  @ViewChild('scrollContainer', { read: ElementRef })
  private readonly scrollContainer?: ElementRef<HTMLElement>

  readonly disabledButton = signal<Direction | null>(null)

  syncButtons() {
    if (!isPlatformBrowser(this.platformId)) return
    const el = this.scrollContainer?.nativeElement
    if (!el) return

    const scrollWidth = el?.scrollWidth - window.innerWidth
    console.log(scrollWidth, el?.scrollLeft)
    if (el.scrollLeft < 30) this.disabledButton.set('left')
    else if (el.scrollLeft > scrollWidth - 30) this.disabledButton.set('right')
    else this.disabledButton.set(null)
  }

  ngAfterViewInit(): void {
    this.syncButtons()
  }

  private scrollByAmount(amount: number) {
    const el = this.scrollContainer?.nativeElement
    if (!el) return

    el.scrollBy({ left: amount, behavior: 'smooth' })
    this.syncButtons()
  }

  scrollLeft = () => this.scrollByAmount(-320)
  scrollRight = () => this.scrollByAmount(320)
}
