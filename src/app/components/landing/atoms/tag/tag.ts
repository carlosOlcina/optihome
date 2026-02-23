import { Component, input } from '@angular/core'
import { LucideAngularModule, LucideIconData } from 'lucide-angular'
import { BrandColorsEnum } from '../../../../config/enums/colors/brand-colors-enum'

/**
 * Representa un pequeño componente de insignia o etiqueta utilizado para mostrar
 * estados, categorías o información destacada.
 *
 * Admite un icono opcional de Lucide y puede tener diferentes roles
 * para accesibilidad y estilo.
 */
@Component({
  selector: 'landing-tag',
  imports: [LucideAngularModule],
  templateUrl: './tag.html',
  styleUrl: './tag.css',
})
export class Tag {
  /**
   * Icono opcional de Lucide para mostrar dentro de la etiqueta.
   */
  icon = input<LucideIconData>()

  /**
   * Rol de accesibilidad para la etiqueta.
   */
  role = input<string>()

  protected readonly BrandColorsEnum = BrandColorsEnum
}
