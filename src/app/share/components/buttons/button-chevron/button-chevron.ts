import { Component, input } from '@angular/core'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, LucideAngularModule } from 'lucide-angular'

/**
 * Representa un componente de botón con chevron personalizable.
 *
 * Se utiliza para navegación o acciones interactivas donde se requiere un
 * icono direccional, manteniendo la consistencia en la interfaz.
 */
@Component({
  selector: 'ui-button-chevron',
  imports: [LucideAngularModule],
  templateUrl: './button-chevron.html',
  styleUrl: './button-chevron.css',
})
export class ButtonChevron {
  /**
   * Dirección del icono chevron.
   * Valores posibles: 'right' | 'left' | 'up' | 'down'.
   * Valor predeterminado: 'right'
   */
  readonly direction = input<Direction>('right')

  /**
   * Función que se ejecuta al hacer clic en el botón.
   * Obligatoria.
   */
  readonly action = input.required<() => void>()

  /**
   * Indica si el botón está deshabilitado.
   * Valor predeterminado: false
   */
  readonly disabled = input<boolean>(false)

  /**
   * Etiqueta de accesibilidad para lectores de pantalla.
   * Valor predeterminado: 'chevron'
   */
  readonly ariaLabel = input<string>('chevron')

  /**
   * Indica si el botón está oculto para tecnologías de asistencia.
   * Valor predeterminado: false
   */
  readonly ariaHidden = input<boolean>(false)

  /**
   * El ID del elemento que este botón controla, para accesibilidad.
   */
  readonly ariaControls = input<string>()

  chevronRightIcon = ChevronRightIcon
  chevronLeftIcon = ChevronLeftIcon
  chevronUpIcon = ChevronUpIcon
  chevronDownIcon = ChevronDownIcon

  /**
   * Manejador interno de clic que ejecuta la acción proporcionada.
   */
  onClick(): void {
    this.action()()
  }
}
