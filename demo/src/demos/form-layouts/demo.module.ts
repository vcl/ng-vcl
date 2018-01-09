import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLFormControlLabelModule, VCLInputControlGroupModule, VCLButtonModule, VCLInputModule, VCLCheckboxModule, VCLLabelModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { FormLayoutsDemoComponent } from './demo.component';

export function demo() {
  return {
    name: 'Form',
    tabs: {
      Demo: FormLayoutsDemoComponent,
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
    ReactiveFormsModule,
    DemoModule,
    VCLButtonModule,
    VCLFormControlLabelModule,
    VCLInputControlGroupModule,
    VCLInputModule,
    VCLCheckboxModule,
    VCLLabelModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ FormLayoutsDemoComponent ],
  declarations: [ FormLayoutsDemoComponent ]
})
export class FormLayoutsDemoModule { }
