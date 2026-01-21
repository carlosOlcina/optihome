import { Routes } from '@angular/router'
import { LandingLayout } from './modules/landing/layouts/landing-layout/landing-layout'

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing/**',
    component: LandingLayout,
    children: [
      { path: '', loadComponent: () => import('./pages/landing/landing-page.component').then((m) => m.LandingPage) },
    ],
  },
]
