import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderLanding } from '../../organism/header/header-landing'
import { FooterLanding } from '../../organism/footer/footer-landing'

/**
 * Representa la plantilla de diseño para las páginas de aterrizaje.
 *
 * Proporciona la estructura para la experiencia de la página de aterrizaje, incluyendo el encabezado,
 * el área de contenido principal (a través de RouterOutlet) y el pie de página.
 */
@Component({
  selector: 'landing-layout',
  imports: [RouterOutlet, HeaderLanding, FooterLanding],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.css',
})
export class LandingLayout {}
