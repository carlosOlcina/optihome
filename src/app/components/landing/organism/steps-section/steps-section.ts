import { Component, input } from '@angular/core'
import { CardLanding } from '../../molecules/card/card'
import { SectionHeaderLanding } from '../../molecules/section-header/section-header'
import stepsData from '../../../../data/landing/config-steps'

/**
 * Representa la sección de pasos o de cómo funciona de la página de aterrizaje.
 *
 * Describe el proceso para utilizar el producto/servicio a través de una serie
 * de componentes Card organizados en pasos lógicos.
 */
@Component({
  selector: 'landing-steps-section',
  imports: [CardLanding, SectionHeaderLanding],
  templateUrl: './steps-section.html',
  styleUrl: './steps-section.css',
})
export class StepsSection {
  /**
   * La lista de pasos de configuración a mostrar.
   */
  steps = input.required<typeof stepsData>()
}
