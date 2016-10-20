import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { VCLModule } from '../src/index';
import { L10nModule, L10nStaticLoaderService } from '../src/l10n/l10n.module';

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { MarkdownComponent } from "./components/markdown/markdown.component";
import { DemoComponent, DemoContentComponent } from "./components/demo/demo.component";
import { DEMOS } from "./demos";

import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  providers: [
    appRoutingProviders
  ],
  imports: [
    FormsModule,
    BrowserModule,
    routing,
    VCLModule,
    L10nModule.forRoot({
      config: {
        // locale: 'de-de'
      },
      loader: L10nStaticLoaderService,
      loaderConfig: {

      }
    })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    MarkdownComponent,
    DemoContentComponent,
    ...(DEMOS.map(dc => Object.keys(dc.tabs).map(key => dc.tabs[key]).filter(o => typeof o === 'function')))
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
