import {Component, input} from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
})
export class Logo {
  size = input<string>('2rem')
}
