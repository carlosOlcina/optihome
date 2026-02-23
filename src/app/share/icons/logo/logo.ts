import { Component, input } from '@angular/core'

/**
 * Representa el componente del logotipo del sitio.
 *
 * Renderiza el logotipo de OptiHome y permite un tamaño personalizado para adaptarse
 * a diferentes contextos como encabezados, pies de página o secciones de aterrizaje.
 */
@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
})
export class Logo {
  /**
   * El tamaño del logotipo (por ejemplo, '2rem', '50px').
   * Valor predeterminado: '2rem'
   */
  size = input<string>('2rem')
}
