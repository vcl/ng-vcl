import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLButtonModule, VCLBusyIndicatorModule, VCLIconModule, VCLIcogramModule, VCLInputModule, VCLAutocompleteModule } from '@vcl/ng-vcl';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { AutocompleteDemoComponent } from './demo.component';
import { AutocompleteAsyncDemoComponent } from './async.component';
import README from '@vcl/ng-vcl/autocomplete/README.md';

export function demo() {
  return {
    label: 'Autocomplete',
    tabs: {
      Demo: AutocompleteDemoComponent,
      'Async Demo': AutocompleteAsyncDemoComponent,
      'README.md': {
        type: 'md',
        content: README
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      },
      'async.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./async.component.html')
      },
      'async.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./async.component.ts')
      }
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLButtonModule,
    VCLIconModule,
    VCLInputModule,
    VCLIcogramModule,
    VCLBusyIndicatorModule,
    VCLAutocompleteModule,
    ScrollingModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ AutocompleteDemoComponent, AutocompleteAsyncDemoComponent ],
  declarations: [ AutocompleteDemoComponent, AutocompleteAsyncDemoComponent ]
})
export class AutocompleteDemoModule { }
