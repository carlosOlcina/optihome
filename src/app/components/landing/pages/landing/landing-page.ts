import { Component, inject } from '@angular/core'
import { LandingCtaSection } from '../../organism/cta-section/cta-section'
import { PrimaryButtonShared } from '../../../../share/components/buttons/primary-button/primary-button'
import { Router } from '@angular/router'
import { SizeEnum } from '../../../../config/enums/size-enum'
import { LucideAngularModule, ShieldIcon, WifiIcon, ZapIcon } from 'lucide-angular'
import { BrandColorsEnum } from '../../../../config/enums/colors/brand-colors-enum'
import { CardLanding } from '../../molecules/card/card'
import { SectionHeaderLanding } from '../../molecules/section-header/section-header'
import StepsData from '../../../../data/landing/config-steps'
import BenefitsCards from '../../../../data/landing/benefits-cards'
import EcosystemProducts from '../../../../data/landing/ecosystem-products'
import { EcosystemSection } from '../../organism/ecosystem-section/ecosystem-section'

@Component({
  selector: 'landing-page',
  imports: [
    LandingCtaSection,
    PrimaryButtonShared,
    LucideAngularModule,
    CardLanding,
    SectionHeaderLanding,
    EcosystemSection,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  private readonly router = inject(Router)

  // Import icons
  readonly wifiIcon = WifiIcon
  readonly zapIcon = ZapIcon
  readonly shieldIcon = ShieldIcon

  navigateToMain = () => {
    void this.router.navigate(['/shop'])
  }

  readonly SizeEnum = SizeEnum
  readonly BrandColorsEnum = BrandColorsEnum

  readonly benefitsCards = BenefitsCards
  readonly ecosystemProducts = EcosystemProducts
  readonly stepsData = StepsData
}
