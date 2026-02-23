import { Component, input } from '@angular/core'
import { LucideAngularModule, LucideIconData } from 'lucide-angular'
import { BrandColorsEnum } from '../../../../config/enums/colors/brand-colors-enum'
import { TitleH3Landing } from '../../atoms/title-h3/title-h3'
import { ParagraphLanding } from '../../atoms/paragraph/paragraph'

/**
 * Representa un componente de tarjeta reutilizable utilizado para mostrar características
 * o beneficios en una página de aterrizaje.
 *
 * Cada tarjeta consta de un icono, un título y un texto descriptivo,
 * lo que ayuda a organizar la información en una cuadrícula o lista visualmente atractiva.
 */
@Component({
  selector: 'landing-card',
  imports: [LucideAngularModule, TitleH3Landing, ParagraphLanding],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class CardLanding {
  /**
   * Los datos del icono de Lucide que se mostrarán en la parte superior de la tarjeta.
   */
  icon = input.required<LucideIconData>()

  /**
   * El texto del título principal de la tarjeta.
   */
  titleText = input.required<string>()

  /**
   * El texto descriptivo del cuerpo de la tarjeta.
   */
  descriptionText = input.required<string>()

  protected readonly BrandColorsEnum = BrandColorsEnum
}
