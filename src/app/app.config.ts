import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core'
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router'

import { routes } from './app.routes'
import { provideClientHydration, withEventReplay } from '@angular/platform-browser'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
      withViewTransitions({ skipInitialTransition: true }),
    ),
    provideClientHydration(withEventReplay()),
  ],
}
