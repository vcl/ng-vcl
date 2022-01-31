import { NgModule, LOCALE_ID, SecurityContext } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import {
  VCLIconModule, VCLNavigationModule, VCLButtonModule,
  VCLLayerModule, VCLFontAwesomeModule, VCLMaterialDesignModule, VCLIcogramModule,
  VCLBusyIndicatorModule,
  VCLDrawerModule,
  VCLInputModule,
  VCLDateAdapterModule,
} from '@vcl/ng-vcl';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

export function determineLocale() {
  return ((navigator.languages && navigator.languages[0]) ?? navigator?.language ?? 'en-us').toLowerCase();
}

export function determineWeekdayOffset() {
  const locale = determineLocale();
  return locale.startsWith('de') ? 1 : 0;
}

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
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
            weekDayOffset: determineWeekdayOffset()
        }),
        ScrollingModule,
        MarkdownModule.forRoot({
            sanitize: SecurityContext.NONE,
            markedOptions: {
                provide: MarkedOptions,
                useValue: {
                    gfm: true,
                    breaks: true,
                    pedantic: false,
                    smartLists: true,
                    smartypants: false,
                    tables: true
                },
            },
        })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useFactory: determineLocale
        },
    ]
})
export class AppModule { }
