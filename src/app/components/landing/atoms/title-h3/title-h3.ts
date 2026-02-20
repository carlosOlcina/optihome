import { Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'

/**
 * Representa un encabezado terciario (H3) reutilizable para las páginas de aterrizaje.
 *
 * Este componente se utiliza a menudo para subencabezados de sección o títulos
 * de características para proporcionar una jerarquía y estilo consistentes.
 */
@Component({
  selector: 'landing-title-h3',
  imports: [LucideAngularModule],
  templateUrl: './title-h3.html',
  styleUrl: './title-h3.css',
})
export class TitleH3Landing {}
