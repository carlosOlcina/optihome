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
import { CardLanding } from '../../molecules/card/card'
import { SectionHeaderLanding } from '../../molecules/section-header/section-header'
import { ProductCardLanding } from '../../molecules/product-card/product-card'

@Component({
  selector: 'landing-page',
  imports: [
    LandingMainSection,
    PrimaryButtonShared,
    LucideAngularModule,
    CardLanding,
    SectionHeaderLanding,
    ProductCardLanding,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPage {
  private readonly router = inject(Router)

  // Import icons
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
