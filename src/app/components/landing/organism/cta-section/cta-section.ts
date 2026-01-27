import { Component, input } from '@angular/core'
import { ParagraphLanding } from '../../atoms/paragraph/paragraph'

@Component({
  selector: 'landing-cta-section',
  imports: [ParagraphLanding],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
})
export class LandingCtaSection {
  contentHighlight = input<string>()
  contentTitle = input<string>()
  contentParagraph = input<string>()
}
