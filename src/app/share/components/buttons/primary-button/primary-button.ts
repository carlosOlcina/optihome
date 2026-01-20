import {Component, input} from '@angular/core';
import {SizeEnum} from '../../../../config/enums/size-enum';
import {NgClass} from '@angular/common';

@Component({
  selector: 'ui-primary-button',
  imports: [
    NgClass
  ],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.css',
})
export class PrimaryButtonShared {
  action = input.required<() => void>();
  size = input<SizeEnum>(SizeEnum.medium);
}
