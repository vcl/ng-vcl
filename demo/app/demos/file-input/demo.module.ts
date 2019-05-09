import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLFileInputModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { FileInputDemoComponent } from './demo.component';

export function demo() {
  return {
    label: 'File Input',
    tabs: {
      Demo: FileInputDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/file-input/README.md')
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      }
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLFileInputModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ FileInputDemoComponent ],
  declarations: [ FileInputDemoComponent ]
})
export class FileInputDemoModule { }
