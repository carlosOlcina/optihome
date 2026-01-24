import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderLanding } from '../../organism/header/header-landing'
import { FooterLanding } from '../../organism/footer/footer-landing'

@Component({
  selector: 'landing-layout',
  imports: [RouterOutlet, HeaderLanding, FooterLanding],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.css',
})
export class LandingLayout {}
