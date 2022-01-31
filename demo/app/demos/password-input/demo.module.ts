import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLPasswordInputModule, VCLInputModule, VCLFormControlGroupModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { PasswordInputDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/password-input/README.md';

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
        type: 'html',
        content: require('!raw-loader!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./demo.component.ts')
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
        VCLFormControlGroupModule,
        RouterModule.forChild([{
                path: '',
                component: DemoComponent,
                data: { demo }
            }]),
    ],
    declarations: [PasswordInputDemoComponent]
})
export class PasswordInputDemoModule { }
