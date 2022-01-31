import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLRadioButtonModule, VCLIcogramModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { RadioButtonDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/radio-button/README.md';

export function demo() {
  return {
    label: 'Radio Button',
    tabs: {
      Demo: RadioButtonDemoComponent,
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
    }
  };
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DemoModule,
        VCLRadioButtonModule,
        VCLIcogramModule,
        RouterModule.forChild([{
                path: '',
                component: DemoComponent,
                data: { demo }
            }]),
    ],
    declarations: [RadioButtonDemoComponent]
})
export class RadioButtonDemoModule { }
