import { Component, input } from '@angular/core'
import { TitleH2Landing } from '../../atoms/title-h2/title-h2'
import { ParagraphLanding } from '../../atoms/paragraph/paragraph'

/**
 * Representa un encabezado para las secciones dentro de la página de aterrizaje.
 *
 * Normalmente consiste en un título H2 prominente y un párrafo opcional
 * para contexto adicional, asegurando la consistencia en los diseños de las secciones.
 */
@Component({
  selector: 'landing-section-header',
  imports: [TitleH2Landing, ParagraphLanding],
  templateUrl: './section-header.html',
  styleUrl: './section-header.css',
})
export class SectionHeaderLanding {
  /**
   * El contenido del texto para el título de la sección (H2).
   */
  titleContent = input.required<string>()

  /**
   * Texto descriptivo opcional para mostrar debajo del título.
   */
  paragraphContent = input<string>()
}
