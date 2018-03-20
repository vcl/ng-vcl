import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLInputModule, VCLAutocompleteModule, VCLEmbeddedInputGroupModule, VCLTokenModule, VCLBusyIndicatorModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { AutocompleteDemoComponent } from './demo.component';

export function demo() {
  return {
    label: 'Input',
    tabs: {
      Demo: AutocompleteDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!@ng-vcl/ng-vcl/autocomplete/README.md')
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      },
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLInputModule,
    VCLEmbeddedInputGroupModule,
    VCLAutocompleteModule,
    VCLTokenModule,
    VCLBusyIndicatorModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ AutocompleteDemoComponent ],
  declarations: [ AutocompleteDemoComponent ]
})
export class AutocompleteDemoModule { }
