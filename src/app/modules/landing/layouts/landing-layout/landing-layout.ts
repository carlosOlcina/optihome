import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {HeaderLanding} from '../../components/layout/header-landing/header-landing';

@Component({
  selector: 'landing-layout',
  imports: [
    RouterOutlet,
    HeaderLanding
  ],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.css',
})
export class LandingLayout {

}
