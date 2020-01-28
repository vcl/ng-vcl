import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

import {
  VCLIconModule, VCLNavigationModule, VCLButtonModule,
  VCLLayerModule, VCLFontAwesomeModule, VCLMaterialDesignModule, VCLIcogramModule,
  VCLBusyIndicatorModule,
  VCL_NATIVE_DATE_ADAPTER_PARSER,
  NativeDateAdapterParserEN,
  NativeDateAdapterParserDE,
  NativeDateAdapterParserENGB,
  VCLDrawerModule
} from '@vcl/ng-vcl';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

export function localeProviderFactory() {
  return navigator.language || 'en-us';
}

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    VCLButtonModule,
    VCLIconModule,
    VCLIcogramModule,
    VCLFontAwesomeModule,
    VCLMaterialDesignModule,
    VCLNavigationModule,
    VCLBusyIndicatorModule,
    VCLLayerModule,
    VCLDrawerModule,
    ScrollingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  entryComponents: [],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useFactory: localeProviderFactory
    },
    {
      provide: VCL_NATIVE_DATE_ADAPTER_PARSER,
      useClass: NativeDateAdapterParserEN,
      multi: true
    },
    {
      provide: VCL_NATIVE_DATE_ADAPTER_PARSER,
      useClass: NativeDateAdapterParserENGB,
      multi: true
    },
    {
      provide: VCL_NATIVE_DATE_ADAPTER_PARSER,
      useClass: NativeDateAdapterParserDE,
      multi: true
    }
  ]
})
export class AppModule { }
