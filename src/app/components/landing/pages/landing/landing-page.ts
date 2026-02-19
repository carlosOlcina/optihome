import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { LucideAngularModule } from 'lucide-angular'
import StepsData from '../../../../data/landing/config-steps'
import BenefitsCards from '../../../../data/landing/benefits-cards'
import EcosystemProducts from '../../../../data/landing/ecosystem-products'
import { EcosystemSection } from '../../organism/ecosystem-section/ecosystem-section'
import { BenefitsSection } from '../../organism/benefits-section/benefits-section'
import { StepsSection } from '../../organism/steps-section/steps-section'
import { HeroSection } from '../../organism/hero-section/hero-section'
import { BenefitsHeroTags } from '../../../../data/landing/benefits-hero-tags'
import { FinalSection } from '../../organism/final-section/final-section'
import { BenefitsFinalTags } from '../../../../data/landing/benefits-final'

@Component({
  selector: 'landing-page',
  imports: [LucideAngularModule, EcosystemSection, BenefitsSection, StepsSection, HeroSection, FinalSection],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  private readonly router = inject(Router)

  navigateToMain = () => {
    void this.router.navigate(['/landing/wait-list'])
  }

  readonly benefitsHeroTags = BenefitsHeroTags
  readonly benefitsFinalTags = BenefitsFinalTags
  readonly benefitsCards = BenefitsCards
  readonly ecosystemProducts = EcosystemProducts
  readonly stepsData = StepsData
}
