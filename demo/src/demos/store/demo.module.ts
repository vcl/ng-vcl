
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLBusyIndicatorModule, VCLButtonModule, VCLInputModule } from '@ng-vcl/ng-vcl';
import { StoreModule } from '@ng-vcl/store';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { StoreDemoComponent } from './demo.component';
import { BooksEffects, BooksService } from './books.service';
import { BOOKS_REDUCERS } from './books.reducers';

export function demo() {
  return {
    label: 'Store',
    tabs: {
      Demo: StoreDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!@ng-vcl/store/README.md')
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      },
      'books.reducers.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./books.reducers.ts')
      },
      'books.service.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./books.service.ts')
      }
    }
  };
}

@NgModule({
  providers: [BooksService],
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLButtonModule,
    VCLInputModule,
    VCLBusyIndicatorModule,
    StoreModule.forChild({
      reducers: [ BOOKS_REDUCERS ],
      effects: [ BooksEffects ]
    }),
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ StoreDemoComponent ],
  declarations: [ StoreDemoComponent ]
})
export class StoreDemoModule { }
