import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { Logo } from '../../../../share/icons/logo/logo'
import { RouterLink } from '@angular/router'

/**
 * Representa el componente de pie de página para la página de aterrizaje.
 *
 * Proporciona enlaces de navegación del sitio, enlaces sociales e información de derechos de autor,
 * asegurando una experiencia consistente al final de cada página.
 */
@Component({
  selector: 'landing-footer',
  imports: [Logo, RouterLink],
  templateUrl: './footer-landing.html',
  styleUrl: './footer-landing.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLanding {
  /**
   * El año actual para la visualización de los derechos de autor.
   */
  readonly currentYear = signal(new Date().getFullYear())

  /**
   * Configuración para las diferentes secciones y enlaces dentro del pie de página.
   */
  readonly footerSections = signal([
    {
      title: 'Productos',
      links: [
        { label: 'Smart lights', href: '#' },
        { label: 'Smart camera', href: '#' },
        { label: 'Smart speaker', href: '#' },
        { label: 'Climate hub', href: '#' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre nosotros', href: '#' },
        { label: 'Contacto', href: '#' },
        { label: 'Privacidad', href: '#' },
        { label: 'Términos', href: '#' },
      ],
    },
    {
      title: 'Recursos',
      links: [{ label: 'Documentación', href: '#' }],
    },
  ])
}
