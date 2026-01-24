import { Component, input } from '@angular/core'
import { ParagraphLanding } from '../../atoms/paragraph/paragraph'

@Component({
  selector: 'landing-main-section',
  imports: [ParagraphLanding],
  templateUrl: './main-section.html',
  styleUrl: './main-section.css',
})
export class LandingMainSection {
  contentHighlight = input<string>()
  contentTitle = input<string>()
  contentParagraph = input<string>()
}
