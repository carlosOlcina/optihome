import { Component } from '@angular/core'
import { Logo } from '../../../../../share/icons/logo/logo'
import { PrimaryButtonShared } from '../../../../../share/components/buttons/primary-button/primary-button'
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'landing-header',
  imports: [Logo, PrimaryButtonShared, RouterLink],
  templateUrl: './header-landing.html',
  styleUrl: './header-landing.css',
})
export class HeaderLanding {
  constructor(private router: Router) {}
  navigateToMain = () => {
    void this.router.navigate(['/landing'])
    console.log('navigateToMain')
  }
}
