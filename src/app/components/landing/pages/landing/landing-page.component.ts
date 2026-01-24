import { Component, inject } from '@angular/core'
import { LandingMainSection } from '../../organism/main-section/main-section'
import { PrimaryButtonShared } from '../../../../share/components/buttons/primary-button/primary-button'
import { Router } from '@angular/router'
import { SizeEnum } from '../../../../config/enums/size-enum'
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
import { BrandColorsEnum } from '../../../../config/enums/colors/brand-colors-enum'
import { TitleH2Landing } from '../../atoms/title-h2/title-h2'
import { CardLanding } from '../../molecules/card/card'
import { ParagraphLanding } from '../../atoms/paragraph/paragraph'

@Component({
  selector: 'landing-page',
  imports: [
    LandingMainSection,
    PrimaryButtonShared,
    LucideAngularModule,
    TitleH2Landing,
    CardLanding,
    ParagraphLanding,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPage {
  private readonly router = inject(Router)

  readonly shieldIcon = ShieldIcon
  readonly zapIcon = ZapIcon
  readonly wifiIcon = WifiIcon
  readonly wifiOffIcon = WifiOffIcon
  readonly dollarIcon = DollarSignIcon
  readonly lockIcon = LockIcon
  readonly serverIcon = ServerIcon

  navigateToMain = () => {
    void this.router.navigate(['/shop'])
  }
  protected readonly SizeEnum = SizeEnum
  protected readonly BrandColorsEnum = BrandColorsEnum
}
