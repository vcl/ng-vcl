import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLJsonEditorModule } from '@ng-vcl/json-editor';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { JsonEditorDemoComponent } from './demo.component';

export function demo() {
  return {
    label: 'JSON Editor',
    tabs: {
      Demo: JsonEditorDemoComponent,
      'README.md': {
        type: 'md',
        content: require("raw-loader!highlight-loader?!markdown-loader?breaks=true!@ng-vcl/json-editor/README.md")
      },
      'demo.component.html': {
        type: 'pre',
        content: require("!highlight-loader?raw=true&lang=html!./demo.component.html")
      },
      'demo.component.ts': {
        type: 'pre',
        content: require("!highlight-loader?raw=true&lang=ts!./demo.component.ts")
      }
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLJsonEditorModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ JsonEditorDemoComponent ],
  declarations: [ JsonEditorDemoComponent ]
})
export class JsonEditorDemoModule { }
