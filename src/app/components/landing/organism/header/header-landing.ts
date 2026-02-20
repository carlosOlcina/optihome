import { Component, inject, signal } from '@angular/core'
import { Logo } from '../../../../share/icons/logo/logo'
import { PrimaryButtonShared } from '../../../../share/components/buttons/primary-button/primary-button'
import { Router, RouterLink } from '@angular/router'
import { LucideAngularModule, MenuIcon, XIcon } from 'lucide-angular'

/**
 * Representa el encabezado principal de la página de aterrizaje.
 *
 * Contiene el logotipo del sitio, enlaces de navegación y un botón de llamada a la acción.
 * También gestiona la funcionalidad de alternancia del menú móvil.
 */
@Component({
  selector: 'landing-header',
  imports: [Logo, PrimaryButtonShared, RouterLink, LucideAngularModule],
  templateUrl: './header-landing.html',
  styleUrl: './header-landing.css',
})
export class HeaderLanding {
  private readonly router = inject(Router)

  readonly menuIcon = MenuIcon
  readonly xIcon = XIcon

  /**
   * Señal que indica si el menú móvil está abierto actualmente.
   */
  isMenuOpen = signal(false)

  /**
   * Alterna la visibilidad del menú móvil.
   */
  toggleMenu() {
    this.isMenuOpen.update((open) => !open)
  }

  /**
   * Cierra el menú móvil.
   */
  closeMenu() {
    this.isMenuOpen.set(false)
  }

  /**
   * Navega a la página de la lista de espera y cierra el menú.
   */
  navigateToMain = () => {
    this.closeMenu()
    void this.router.navigate(['/landing/wait-list'])
  }
}
