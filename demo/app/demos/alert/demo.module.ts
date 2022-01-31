import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLAlertModule, VCLButtonModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { AlertDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/alert/README.md';

export function demo() {
  return {
    label: 'Alert',
    tabs: {
      Demo: AlertDemoComponent,
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
        DemoModule,
        VCLAlertModule,
        VCLButtonModule,
        RouterModule.forChild([{
                path: '',
                component: DemoComponent,
                data: { demo }
            }]),
    ],
    declarations: [AlertDemoComponent]
})
export class AlertDemoModule { }
