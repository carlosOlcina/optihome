import { Component, input } from '@angular/core'
import { CardLanding } from '../../molecules/card/card'
import { SectionHeaderLanding } from '../../molecules/section-header/section-header'
import stepsData from '../../../../data/landing/config-steps'

@Component({
  selector: 'landing-steps-section',
  imports: [CardLanding, SectionHeaderLanding],
  templateUrl: './steps-section.html',
  styleUrl: './steps-section.css',
})
export class StepsSection {
  steps = input.required<typeof stepsData>()
}
