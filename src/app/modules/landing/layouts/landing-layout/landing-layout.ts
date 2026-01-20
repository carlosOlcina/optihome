import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Logo} from '../../../../share/icons/logo/logo';

@Component({
  selector: 'landing-layout',
  imports: [
    RouterOutlet,
    Logo,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.css',
})
export class LandingLayout {

}
