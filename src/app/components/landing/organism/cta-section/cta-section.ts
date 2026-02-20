import { Component, input } from '@angular/core'
import { ParagraphLanding } from '../../atoms/paragraph/paragraph'

/**
 * Representa una sección de llamada a la acción (CTA) para la página de aterrizaje.
 *
 * Este componente se utiliza para resaltar mensajes clave e incitar a la interacción del usuario
 * con un título, un texto destacado y un párrafo descriptivo.
 */
@Component({
  selector: 'landing-cta-section',
  imports: [ParagraphLanding],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
})
export class LandingCtaSection {
  /**
   * Texto destacado de alto nivel, generalmente mostrado arriba del título.
   */
  contentHighlight = input<string>()

  /**
   * El título principal de la sección CTA.
   */
  contentTitle = input<string>()

  /**
   * El párrafo descriptivo de la sección CTA.
   */
  contentParagraph = input<string>()
}
