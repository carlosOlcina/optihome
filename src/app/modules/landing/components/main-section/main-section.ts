import {Component, input} from '@angular/core';

@Component({
  selector: 'landing-main-section',
  imports: [],
  templateUrl: './main-section.html',
  styleUrl: './main-section.css',
})
export class LandingMainSection {
  contentHighlight = input<string>();
  contentTitle = input<string>();
  contentParagraph = input<string>();
}
