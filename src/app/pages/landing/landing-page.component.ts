import { Component } from '@angular/core';
import {LandingMainSection} from '../../modules/landing/components/main-section/main-section';
import {PrimaryButtonShared} from '../../share/components/buttons/primary-button/primary-button';
import {Router} from '@angular/router';
import {SizeEnum} from '../../config/enums/size-enum';
import {LucideAngularModule, ShieldIcon, WifiIcon, ZapIcon} from 'lucide-angular';
import {BrandColorsEnum} from '../../config/enums/colors/brand-colors-enum';

@Component({
  selector: 'landing-page',
  imports: [
    LandingMainSection,
    PrimaryButtonShared,
    LucideAngularModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPage {
  readonly shieldIcon = ShieldIcon
  readonly zapIcon = ZapIcon
  readonly wifiIcon = WifiIcon

  constructor(private router: Router) {}

  navigateToMain = ()=> {
    void this.router.navigate(['/shop']);
  }
  protected readonly SizeEnum = SizeEnum;
  protected readonly BrandColorsEnum = BrandColorsEnum;
}
