import { Routes } from '@angular/router'
import { LandingLayout } from './components/landing/templates/landing/landing-layout'

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing',
    component: LandingLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./components/landing/pages/landing/landing-page').then((m) => m.LandingPage),
      },
      {
        path: 'wait-list',
        pathMatch: 'full',
        loadComponent: () => import('./components/landing/pages/waitlist/waitlist').then((m) => m.Waitlist),
      },
    ],
  },
]
