import { Component } from '@angular/core';
import {LandingMainSection} from '../../modules/landing/components/main-section/main-section';

@Component({
  selector: 'landing-page',
  imports: [
    LandingMainSection,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPage {

}
