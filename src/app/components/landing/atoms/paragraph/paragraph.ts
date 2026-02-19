import { Component, input } from '@angular/core'
import { NgStyle } from '@angular/common'

/**
 * Componente que representa un párrafo de la landing page.
 * Permite personalizar la alineación del texto mediante la propiedad `centered`.
 */
@Component({
  selector: 'landing-paragraph',
  imports: [NgStyle],
  templateUrl: './paragraph.html',
  styleUrl: './paragraph.css',
})
export class ParagraphLanding {
  /**
   * Centra el texto si es true.
   * Por defecto: false
   */
  centered = input<boolean>(false)
}
