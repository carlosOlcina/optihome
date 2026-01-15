import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing',  loadComponent: () => import('./pages/landing/landing-page.component').then(m => m.LandingPage)}
];
