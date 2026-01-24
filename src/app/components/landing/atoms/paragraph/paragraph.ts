import { Component, input } from '@angular/core'
import { NgStyle } from '@angular/common'

@Component({
  selector: 'landing-paragraph',
  imports: [NgStyle],
  templateUrl: './paragraph.html',
  styleUrl: './paragraph.css',
})
export class ParagraphLanding {
  centered = input<boolean>(false)
}
