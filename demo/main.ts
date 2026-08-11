import {
  enableProdMode,
  LOCALE_ID,
  SecurityContext,
  importProvidersFrom,
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'prismjs';
import 'prismjs/plugins/custom-class/prism-custom-class';
// import any languages you need:
import 'prismjs/components/prism-typescript.min';

import { environment } from './environments/environment';
import {
  provideHttpClient,
  withXhr,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import {
  VCLIconModule,
  VCLIcogramModule,
  VCLFontAwesomeModule,
  VCLMaterialDesignModule,
  VCLLayerModule,
  VCLDateAdapterModule,
} from '@vcl/ng-vcl';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MarkdownModule, SANITIZE, MARKED_OPTIONS } from 'ngx-markdown';
import { AppComponent } from './app/components/app/app.component';

export function determineLocale() {
  return (
    (navigator.languages && navigator.languages[0]) ??
    navigator?.language ??
    'en-us'
  ).toLowerCase();
}

export function determineWeekdayOffset() {
  const locale = determineLocale();
  return locale.startsWith('de') ? 1 : 0;
}

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      FormsModule,
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      VCLIconModule,
      VCLIcogramModule,
      VCLFontAwesomeModule,
      VCLMaterialDesignModule,
      VCLLayerModule,
      VCLDateAdapterModule.forRoot({
        weekDayOffset: determineWeekdayOffset(),
      }),
      ScrollingModule,
      MarkdownModule.forRoot({
        sanitize: {
          provide: SANITIZE,
          useValue: SecurityContext.NONE,
        },
        markedOptions: {
          provide: MARKED_OPTIONS,
          useValue: {
            gfm: true,
            breaks: true,
            pedantic: false,
            // smartLists: true,
            // smartypants: false,
            // tables: true,
          },
        },
      })
    ),
    {
      provide: LOCALE_ID,
      useFactory: determineLocale,
    },
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
  ],
}).catch(err => console.error(err));

Prism.plugins.customClass.prefix('prism-');
