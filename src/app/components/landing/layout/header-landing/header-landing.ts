import { Component, inject } from '@angular/core'
import { Logo } from '../../../../share/icons/logo/logo'
import { PrimaryButtonShared } from '../../../../share/components/buttons/primary-button/primary-button'
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'landing-header',
  imports: [Logo, PrimaryButtonShared, RouterLink],
  templateUrl: './header-landing.html',
  styleUrl: './header-landing.css',
})
export class HeaderLanding {
  private readonly router = inject(Router)

  navigateToMain = () => {
    void this.router.navigate(['/landing'])
    console.log('navigateToMain')
  }
}
