import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { Logo } from '../../../../share/icons/logo/logo'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'landing-footer',
  imports: [Logo, RouterLink],
  templateUrl: './footer-landing.html',
  styleUrl: './footer-landing.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLanding {
  readonly currentYear = signal(new Date().getFullYear())

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
