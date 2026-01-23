import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderLanding } from '../../components/landing/layout/header-landing/header-landing'
import { FooterLanding } from '../../components/landing/layout/footer-landing/footer-landing'

@Component({
  selector: 'landing-layout',
  imports: [RouterOutlet, HeaderLanding, FooterLanding],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.css',
})
export class LandingLayout {}
