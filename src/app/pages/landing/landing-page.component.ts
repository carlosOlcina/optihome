import { Component } from '@angular/core'
import { LandingMainSection } from '../../modules/landing/components/main-section/main-section'
import { PrimaryButtonShared } from '../../share/components/buttons/primary-button/primary-button'
import { Router } from '@angular/router'
import { SizeEnum } from '../../config/enums/size-enum'
import {
  DollarSignIcon,
  LockIcon,
  LucideAngularModule,
  ServerIcon,
  ShieldIcon,
  WifiIcon,
  WifiOffIcon,
  ZapIcon,
} from 'lucide-angular'
import { BrandColorsEnum } from '../../config/enums/colors/brand-colors-enum'
import { TitleLanding } from '../../modules/landing/components/title/title'
import { TitleParagraphLanding } from '../../modules/landing/components/title-paragraph/title-paragraph'
import { CardLanding } from '../../modules/landing/components/card/card'

@Component({
  selector: 'landing-page',
  imports: [
    LandingMainSection,
    PrimaryButtonShared,
    LucideAngularModule,
    TitleLanding,
    TitleParagraphLanding,
    CardLanding,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPage {
  readonly shieldIcon = ShieldIcon
  readonly zapIcon = ZapIcon
  readonly wifiIcon = WifiIcon
  readonly wifiOffIcon = WifiOffIcon
  readonly dolarIcon = DollarSignIcon
  readonly lockIcon = LockIcon
  readonly serverIcon = ServerIcon

  constructor(private router: Router) {}

  navigateToMain = () => {
    void this.router.navigate(['/shop'])
  }
  protected readonly SizeEnum = SizeEnum
  protected readonly BrandColorsEnum = BrandColorsEnum
}
