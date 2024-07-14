import { NgModule, LOCALE_ID, SecurityContext } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MarkdownModule, MARKED_OPTIONS } from 'ngx-markdown';

import {
  VCLIconModule,
  VCLNavigationModule,
  VCLButtonModule,
  VCLLayerModule,
  VCLFontAwesomeModule,
  VCLMaterialDesignModule,
  VCLIcogramModule,
  VCLBusyIndicatorModule,
  VCLDrawerModule,
  VCLInputModule,
  VCLDateAdapterModule,
} from '@vcl/ng-vcl';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

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

@NgModule({ declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent], imports: [FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        VCLInputModule,
        VCLButtonModule,
        VCLIconModule,
        VCLIcogramModule,
        VCLFontAwesomeModule,
        VCLMaterialDesignModule,
        VCLNavigationModule,
        VCLBusyIndicatorModule,
        VCLLayerModule,
        VCLDrawerModule,
        VCLDateAdapterModule.forRoot({
            weekDayOffset: determineWeekdayOffset(),
        }),
        ScrollingModule,
        MarkdownModule.forRoot({
            sanitize: SecurityContext.NONE,
            markedOptions: {
                provide: MARKED_OPTIONS,
                useValue: {
                    gfm: true,
                    breaks: true,
                    pedantic: false,
                    smartLists: true,
                    smartypants: false,
                    tables: true,
                },
            },
        })], providers: [
        {
            provide: LOCALE_ID,
            useFactory: determineLocale,
        },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
