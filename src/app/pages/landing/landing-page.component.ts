import { Component } from '@angular/core';
import {LandingHeader} from '../../modules/landing/components/header/header';

@Component({
  selector: 'landing-page',
  imports: [
    LandingHeader,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPage {

}
