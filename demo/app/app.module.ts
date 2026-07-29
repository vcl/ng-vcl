import { NgModule, LOCALE_ID, SecurityContext } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXhr,
} from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MarkdownModule, MARKED_OPTIONS, SANITIZE } from 'ngx-markdown';

import {
  VCLIconModule,
  VCLLayerModule,
  VCLFontAwesomeModule,
  VCLMaterialDesignModule,
  VCLIcogramModule,
  VCLDateAdapterModule,
  VCLNavigationComponent,
  VCLNavigationItemComponent,
  VCLNavigationLabelComponent,
  VCLInputDirective,
  VCLInputFieldComponent,
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
