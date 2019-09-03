import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLPasswordInputModule, VCLInputModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { PasswordInputDemoComponent } from './demo.component';
import README from '@ng-vcl/ng-vcl/password-input/README.md';

export function demo() {
  return {
    label: 'Password Input',
    tabs: {
      Demo: PasswordInputDemoComponent,
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
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLPasswordInputModule,
    VCLInputModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ PasswordInputDemoComponent ],
  declarations: [ PasswordInputDemoComponent ]
})
export class PasswordInputDemoModule { }
