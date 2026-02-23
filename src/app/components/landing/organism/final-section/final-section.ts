import { Component, input } from '@angular/core'
import { LandingCtaSection } from '../cta-section/cta-section'
import { PrimaryButtonShared } from '../../../../share/components/buttons/primary-button/primary-button'
import { Tag } from '../../atoms/tag/tag'
import { SizeEnum } from '../../../../config/enums/size-enum'

/**
 * Representa la sección final de llamada a la acción de la página de aterrizaje.
 *
 * Combina una sección CTA con un botón de acción principal y etiquetas de beneficios
 * para animar a los usuarios a dar el último paso (por ejemplo, unirse a la lista de espera).
 */
@Component({
  selector: 'landing-final-section',
  imports: [LandingCtaSection, PrimaryButtonShared, Tag],
  templateUrl: './final-section.html',
  styleUrl: './final-section.css',
})
export class FinalSection {
  /**
   * Función a ejecutar cuando se hace clic en el botón de acción principal.
   */
  actionInput = input.required<() => void>()

  /**
   * Una lista de etiquetas de beneficios para mostrar en esta sección.
   */
  benefitTags = input.required<TagItem[]>()

  protected readonly SizeEnum = SizeEnum
}
