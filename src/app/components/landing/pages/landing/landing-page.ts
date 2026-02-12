import { Component, inject } from '@angular/core'
import { LandingCtaSection } from '../../organism/cta-section/cta-section'
import { PrimaryButtonShared } from '../../../../share/components/buttons/primary-button/primary-button'
import { Router } from '@angular/router'
import { SizeEnum } from '../../../../config/enums/size-enum'
import { LucideAngularModule } from 'lucide-angular'
import { CardLanding } from '../../molecules/card/card'
import { SectionHeaderLanding } from '../../molecules/section-header/section-header'
import StepsData from '../../../../data/landing/config-steps'
import BenefitsCards from '../../../../data/landing/benefits-cards'
import EcosystemProducts from '../../../../data/landing/ecosystem-products'
import { EcosystemSection } from '../../organism/ecosystem-section/ecosystem-section'
import { Tag } from '../../atoms/tag/tag'
import { BenefitsSection } from '../../organism/benefits-section/benefits-section'
import { StepsSection } from '../../organism/steps-section/steps-section'
import { HeroSection } from '../../organism/hero-section/hero-section'
import { BenefitsHeroTags } from '../../../../data/landing/benefits-hero-tags'

@Component({
  selector: 'landing-page',
  imports: [
    LandingCtaSection,
    PrimaryButtonShared,
    LucideAngularModule,
    CardLanding,
    SectionHeaderLanding,
    EcosystemSection,
    Tag,
    BenefitsSection,
    StepsSection,
    HeroSection,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  private readonly router = inject(Router)

  navigateToMain = () => {
    void this.router.navigate(['/landing/wait-list'])
  }

  readonly SizeEnum = SizeEnum

  readonly benefitsTags = BenefitsHeroTags
  readonly benefitsCards = BenefitsCards
  readonly ecosystemProducts = EcosystemProducts
  readonly stepsData = StepsData
}
