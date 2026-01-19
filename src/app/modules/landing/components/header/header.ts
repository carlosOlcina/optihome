import {Component, input} from '@angular/core';

@Component({
  selector: 'landing-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class LandingHeader {
  contentHighlight = input<string>();
  contentTitle = input<string>();
  contentParagraph = input<string>();
}
