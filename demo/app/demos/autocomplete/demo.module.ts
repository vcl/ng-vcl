import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLButtonModule, VCLEmbeddedInputGroupModule, VCLBusyIndicatorModule, VCLIconModule, VCLIcogramModule, VCLInputModule, VCLAutocompleteModule } from '@ng-vcl/ng-vcl';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { DropdownDemoComponent } from './demo.component';
import { DropdownAsyncDemoComponent } from './async.component';

export function demo() {
  return {
    name: 'Dropdown',
    tabs: {
      Demo: DropdownDemoComponent,
      'Async Demo': DropdownAsyncDemoComponent,
      // 'README.md': {
      //   type: 'md',
      //   content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/dropdown/README.md')
      // },
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
    VCLEmbeddedInputGroupModule,
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
  entryComponents: [ DropdownDemoComponent, DropdownAsyncDemoComponent ],
  declarations: [ DropdownDemoComponent, DropdownAsyncDemoComponent ]
})
export class DropdownDemoModule { }
