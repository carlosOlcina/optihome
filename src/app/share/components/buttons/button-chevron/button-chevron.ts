import { Component, input } from '@angular/core'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, LucideAngularModule } from 'lucide-angular'

@Component({
  selector: 'ui-button-chevron',
  imports: [LucideAngularModule],
  templateUrl: './button-chevron.html',
  styleUrl: './button-chevron.css',
})
export class ButtonChevron {
  readonly direction = input<Direction>('right')
  readonly action = input.required<() => void>()
  readonly disabled = input<boolean>(false)

  // Aria inputs
  readonly ariaLabel = input<string>('chevron')
  readonly ariaHidden = input<boolean>(false)
  readonly ariaControls = input<string>()

  chevronRightIcon = ChevronRightIcon
  chevronLeftIcon = ChevronLeftIcon
  chevronUpIcon = ChevronUpIcon
  chevronDownIcon = ChevronDownIcon

  onClick(): void {
    this.action()()
  }
}
