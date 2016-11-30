import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { VCLModule, L10nModule, L10nStaticLoaderService, StoreModule } from '../src/index';

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { MarkdownComponent } from "./components/markdown/markdown.component";
import { DemoComponent, DemoContentComponent } from "./components/demo/demo.component";
import { BOOKS_REDUCERS } from './components/store/books.reducers';
import { BooksService, BooksEffects } from './components/store/books.service';
import { DEMOS } from "./demos";

import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  providers: [
    appRoutingProviders,
    BooksService
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
    StoreModule.forRoot({
      enableRouter: true,
      reducers: [
        BOOKS_REDUCERS
      ],
      effects: [
        BooksEffects
      ]
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
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
