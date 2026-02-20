import { Component, input } from '@angular/core'
import { CardLanding } from '../../molecules/card/card'
import { SectionHeaderLanding } from '../../molecules/section-header/section-header'
import benefitsCards from '../../../../data/landing/benefits-cards'

/**
 * Representa la sección de beneficios de la página de aterrizaje.
 *
 * Muestra una colección de beneficios utilizando componentes Card,
 * precedidos por un encabezado de sección estándar.
 */
@Component({
  selector: 'landing-benefits-section',
  imports: [CardLanding, SectionHeaderLanding],
  templateUrl: './benefits-section.html',
  styleUrl: './benefits-section.css',
})
export class BenefitsSection {
  /**
   * La lista de beneficios a mostrar.
   */
  benefits = input.required<typeof benefitsCards>()
}
