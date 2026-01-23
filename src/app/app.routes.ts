import { Routes } from '@angular/router'
import { LandingLayout } from './components/landing/templates/landing/landing-layout'

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing/**',
    component: LandingLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/landing/pages/landing/landing-page.component').then((m) => m.LandingPage),
      },
    ],
  },
]
