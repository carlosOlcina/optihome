import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {Logo} from '../../../../share/icons/logo/logo';
import {PrimaryButtonShared} from '../../../../share/components/buttons/primary-button/primary-button';

@Component({
  selector: 'landing-layout',
  imports: [
    RouterOutlet,
    Logo,
    RouterLink,
    PrimaryButtonShared
  ],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.css',
})
export class LandingLayout {
  constructor(private router: Router) {}
  navigateToMain = ()=> {
    void this.router.navigate(['/landing']);
    console.log('navigateToMain');
  }
}
