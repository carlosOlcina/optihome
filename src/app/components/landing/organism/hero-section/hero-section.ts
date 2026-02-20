import { Component, input } from '@angular/core'
import { LandingCtaSection } from '../cta-section/cta-section'
import { PrimaryButtonShared } from '../../../../share/components/buttons/primary-button/primary-button'
import { Tag } from '../../atoms/tag/tag'
import { SizeEnum } from '../../../../config/enums/size-enum'

/**
 * Representa la sección hero de la página de aterrizaje.
 *
 * Es la primera sección que ve un usuario e incluye el CTA principal,
 * etiquetas de beneficios y un botón de acción principal.
 */
@Component({
  selector: 'landing-hero-section',
  imports: [LandingCtaSection, PrimaryButtonShared, Tag],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  /**
   * Función a ejecutar cuando se hace clic en el botón de acción principal del hero.
   */
  linkAction = input.required<() => void>()

  /**
   * Una lista de etiquetas de beneficios para destacar en la sección hero.
   */
  benefitsTags = input.required<TagItem[]>()

  protected readonly SizeEnum = SizeEnum
}
