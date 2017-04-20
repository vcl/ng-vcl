import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VCLIconModule, VCLNavigationModule, VCLButtonModule, VCLLayerModule, L10nModule, L10nStaticLoaderService } from '@ng-vcl/ng-vcl';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from "./components/home/home.component";

import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  providers: [
    appRoutingProviders
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    routing,
    VCLButtonModule,
    VCLIconModule,
    VCLNavigationModule,
    VCLLayerModule.forRoot(),
    L10nModule.forRoot({
      config: { },
      loader: L10nStaticLoaderService,
      loaderConfig: { }
    }),
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



