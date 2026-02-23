import { Component, input } from '@angular/core'
import { NgStyle } from '@angular/common'

/**
 * Representa un componente de párrafo reutilizable para las páginas de aterrizaje.
 *
 * Este componente proporciona una forma consistente de mostrar texto descriptivo
 * en toda la aplicación, permitiendo el centrado opcional del texto.
 */
@Component({
  selector: 'landing-paragraph',
  imports: [NgStyle],
  templateUrl: './paragraph.html',
  styleUrl: './paragraph.css',
})
export class ParagraphLanding {
  /**
   * Indica si el texto debe estar centrado horizontalmente.
   * Valor predeterminado: false
   */
  centered = input<boolean>(false)
}
