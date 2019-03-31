import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {
  VCLIconModule, VCLNavigationModule, VCLButtonModule,
  VCLLayerModule, VCLFontAwesomeModule, VCLMaterialDesignModule
} from '@ng-vcl/ng-vcl';
import {
  LayerAnimationsModule, PopoverAnimationsModule,
  DropdownAnimationsModule,
} from '@ng-vcl/animations';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    VCLButtonModule,
    VCLIconModule,
    VCLFontAwesomeModule,
    VCLMaterialDesignModule,
    VCLNavigationModule,
    VCLLayerModule.forRoot(),
    LayerAnimationsModule,
    PopoverAnimationsModule,
    DropdownAnimationsModule
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
