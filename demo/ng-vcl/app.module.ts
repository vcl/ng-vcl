import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { VCLModule, L10nModule, L10nStaticLoaderService } from '@ng-vcl/ng-vcl';
import { vclCheckboxAnimations, vclLayerAnimations, vclPopoverAnimations, vclTokenAnimations } from '@ng-vcl/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { MarkdownComponent } from "./components/markdown/markdown.component";
import { DemoContainerComponent } from "./components/demo-container/demo-container.component";
import { DEMO_MODULES } from "./demos";

import { routing, appRoutingProviders } from './app.routes';

vclCheckboxAnimations();
vclLayerAnimations();
vclPopoverAnimations() ;
vclTokenAnimations();

@NgModule({
  providers: [
    appRoutingProviders
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    routing,
    VCLModule,
    L10nModule.forRoot({
      config: {
        // locale: 'de-de'
      },
      loader: L10nStaticLoaderService,
      loaderConfig: {

      }
    }),
    ...DEMO_MODULES
  ],
  declarations: [
    AppComponent,
    DemoContainerComponent,
    HomeComponent,
    MarkdownComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
