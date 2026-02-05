import { Component, inject, signal } from '@angular/core'
import { Logo } from '../../../../share/icons/logo/logo'
import { PrimaryButtonShared } from '../../../../share/components/buttons/primary-button/primary-button'
import { Router, RouterLink } from '@angular/router'
import { LucideAngularModule, MenuIcon, XIcon } from 'lucide-angular'

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

  isMenuOpen = signal(false)

  toggleMenu() {
    this.isMenuOpen.update((open) => !open)
  }

  closeMenu() {
    this.isMenuOpen.set(false)
  }

  navigateToMain = () => {
    this.closeMenu()
    void this.router.navigate(['/landing'])
    console.log('navigateToMain')
  }
}
