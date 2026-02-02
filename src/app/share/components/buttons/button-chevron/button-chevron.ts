import { Component, input } from '@angular/core'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, LucideAngularModule } from 'lucide-angular'

@Component({
  selector: 'ui-button-chevron',
  imports: [LucideAngularModule],
  templateUrl: './button-chevron.html',
  styleUrl: './button-chevron.css',
})
export class ButtonChevron {
  direction = input<Direction>('right')
  action = input.required<() => void>()

  chevronRightIcon = ChevronRightIcon
  chevronLeftIcon = ChevronLeftIcon
  chevronUpIcon = ChevronUpIcon
  chevronDownIcon = ChevronDownIcon
}
