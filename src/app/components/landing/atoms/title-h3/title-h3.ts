import { Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'

/**
 * Representa un componente reutilizable de Angular que muestra un título H3,
 * normalmente usado en landing pages u otras secciones que requieren un encabezado terciario.
 *
 * El componente `TitleH3Landing` puede ser utilizado en módulos más amplios de la aplicación
 * para mantener consistencia y facilitar el desarrollo de elementos de la interfaz.
 */

@Component({
  selector: 'landing-title-h3',
  imports: [LucideAngularModule],
  templateUrl: './title-h3.html',
  styleUrl: './title-h3.css',
})
export class TitleH3Landing {}
