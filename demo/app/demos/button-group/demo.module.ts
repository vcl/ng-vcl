import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLButtonGroupModule, VCLButtonModule, VCLIconModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { ButtonGroupDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/button-group/README.md';

export function demo() {
  return {
    label: 'Button Group',
    tabs: {
      Demo: ButtonGroupDemoComponent,
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
      }
    },
  };
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DemoModule,
        VCLButtonGroupModule,
        VCLButtonModule,
        VCLIconModule,
        RouterModule.forChild([{
                path: '',
                component: DemoComponent,
                data: { demo }
            }]),
    ],
    declarations: [ButtonGroupDemoComponent]
})
export class ButtonGroupDemoModule { }
