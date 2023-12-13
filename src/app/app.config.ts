import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideNzIcons } from './icons-provider';
import { es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthenticationInterceptor } from './interceptor/auth.interceptor';

registerLocaleData(es);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideNzIcons(), 
    provideNzI18n(es_ES), 
    importProvidersFrom(FormsModule), 
    importProvidersFrom(HttpClientModule), 
    provideAnimations(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true, // true para permitir varios interceptores
    }
  ]
};
