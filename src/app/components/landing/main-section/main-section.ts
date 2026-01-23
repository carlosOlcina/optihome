import { Component, input } from '@angular/core'
import { TitleParagraphLanding } from '../title-paragraph/title-paragraph'

@Component({
  selector: 'landing-main-section',
  imports: [TitleParagraphLanding],
  templateUrl: './main-section.html',
  styleUrl: './main-section.css',
})
export class LandingMainSection {
  contentHighlight = input<string>()
  contentTitle = input<string>()
  contentParagraph = input<string>()
}
