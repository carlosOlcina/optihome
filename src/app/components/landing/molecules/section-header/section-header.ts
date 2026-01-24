import { Component, input } from '@angular/core'
import { TitleH2Landing } from '../../atoms/title-h2/title-h2'
import { ParagraphLanding } from '../../atoms/paragraph/paragraph'

@Component({
  selector: 'landing-section-header',
  imports: [TitleH2Landing, ParagraphLanding],
  templateUrl: './section-header.html',
  styleUrl: './section-header.css',
})
export class SectionHeaderLanding {
  titleContent = input.required<string>()
  paragraphContent = input<string>()
}
