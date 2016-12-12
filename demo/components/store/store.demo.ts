import { Store } from './../../../src/store/store';
import { DemoComponent } from './../demo/demo.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { BooksEffects, BooksService } from './books.service';
import { BOOKS_REDUCERS } from './books.reducers';

import { StoreModule, VCLModule } from './../../../src/index';

const PATH = 'store';
const LABEL = 'Store';

@NgModule({
  imports: [
    BrowserModule,
    VCLModule,
    StoreModule.forChild({
      reducers: [ BOOKS_REDUCERS ],
      effects: [ BooksEffects ]
    }),
    RouterModule.forChild([{
      path: PATH,
      component: DemoComponent,
      data: {
        label: LABEL,
        tabs: {
          Demo: StoreComponent,
          'README.md': require("!raw-loader!../../../src/store/README.md"),
          'demo.component.html': require("!raw-loader!./store.component.html"),
          'demo.component.ts': require("!raw-loader!./store.component.ts"),
          'books.service.ts': require("!raw-loader!./books.service.ts"),
          'books.reducers.ts': require("!raw-loader!./books.reducers.ts")
        }
      },
    }]),
  ],
  providers: [
    BooksService
  ],
  declarations: [
    StoreComponent
  ]
})
export default class StoreDemoModule {
  static label = LABEL;
  static path = PATH;
  static category = 'Other';
};

