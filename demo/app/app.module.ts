import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {
  VCLIconModule, VCLNavigationModule, VCLButtonModule,
  VCLLayerModule, VCLFontAwesomeModule, VCLMaterialDesignModule, VCLIcogramModule
} from '@ng-vcl/ng-vcl';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

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
    VCLLayerModule,
    ScrollingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  entryComponents: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
