import { Component, input } from '@angular/core'
import { CardLanding } from '../../molecules/card/card'
import { SectionHeaderLanding } from '../../molecules/section-header/section-header'
import benefitsCards from '../../../../data/landing/benefits-cards'

@Component({
  selector: 'landing-benefits-section',
  imports: [CardLanding, SectionHeaderLanding],
  templateUrl: './benefits-section.html',
  styleUrl: './benefits-section.css',
})
export class BenefitsSection {
  benefits = input.required<typeof benefitsCards>()
}
