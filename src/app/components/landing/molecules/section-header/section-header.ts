import { Component, input } from '@angular/core'
import { TitleLanding } from '../../atoms/title/title'
import { TitleParagraphLanding } from '../../atoms/title-paragraph/title-paragraph'

@Component({
  selector: 'landing-section-header',
  imports: [TitleLanding, TitleParagraphLanding],
  templateUrl: './section-header.html',
  styleUrl: './section-header.css',
})
export class SectionHeaderLanding {
  titleContent = input.required<string>()
  paragraphContent = input<string>()
}
