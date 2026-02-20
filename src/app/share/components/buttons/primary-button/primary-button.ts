import { Component, input } from '@angular/core'
import { SizeEnum } from '../../../../config/enums/size-enum'
import { NgClass } from '@angular/common'

/**
 * Representa el componente de botón primario utilizado para acciones principales.
 *
 * Proporciona un botón con estilo y configurable que mantiene la
 * consistencia visual para las interacciones principales en toda la aplicación.
 */
@Component({
  selector: 'ui-primary-button',
  imports: [NgClass],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.css',
})
export class PrimaryButtonShared {
  /**
   * Función obligatoria que se ejecuta cuando se hace clic en el botón.
   */
  action = input.required<() => void>()

  /**
   * El tamaño del botón.
   * Valores posibles: SizeEnum.small | SizeEnum.medium | SizeEnum.large
   * Valor predeterminado: SizeEnum.medium
   */
  size = input<SizeEnum>(SizeEnum.medium)
}
