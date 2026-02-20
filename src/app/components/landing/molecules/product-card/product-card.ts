import { Component, input } from '@angular/core'
import { ChevronRightIcon, LucideAngularModule } from 'lucide-angular'
import { NgOptimizedImage } from '@angular/common'
import { RouterLink } from '@angular/router'
import { TitleH3Landing } from '../../atoms/title-h3/title-h3'
import { BrandColorsEnum } from '../../../../config/enums/colors/brand-colors-enum'

/**
 * Representa un componente de tarjeta diseñado específicamente para mostrar productos
 * en la sección de ecosistema de la página de aterrizaje.
 *
 * Incluye una imagen, un título y un enlace de llamada a la acción que navega
 * a los detalles del producto o a una página externa.
 */
@Component({
  selector: 'landing-product-card',
  imports: [LucideAngularModule, NgOptimizedImage, RouterLink, TitleH3Landing],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardLanding {
  /**
   * La URL de origen de la imagen del producto.
   */
  imageUrl = input.required<string>()

  /**
   * Texto de accesibilidad para la imagen del producto.
   */
  imageAlt = input.required<string>()

  /**
   * El nombre o título del producto.
   */
  titleContent = input.required<string>()

  /**
   * El texto visible para el enlace de navegación.
   */
  urlContent = input.required<string>()

  /**
   * La ruta de navegación o URL para el enlace del producto.
   */
  urlPath = input.required<string>()

  protected readonly chevronRightIcon = ChevronRightIcon
  protected readonly BrandColorsEnum = BrandColorsEnum
}
