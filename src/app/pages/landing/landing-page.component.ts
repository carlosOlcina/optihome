import { Component } from '@angular/core';
import {LandingMainSection} from '../../modules/landing/components/main-section/main-section';
import {PrimaryButtonShared} from '../../share/components/buttons/primary-button/primary-button';
import {Router} from '@angular/router';
import {SizeEnum} from '../../config/enums/size-enum';

@Component({
  selector: 'landing-page',
  imports: [
    LandingMainSection,
    PrimaryButtonShared,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPage {
  constructor(private router: Router) {}

  navigateToMain = ()=> {
    void this.router.navigate(['/shop']);
  }
  protected readonly SizeEnum = SizeEnum;
}
