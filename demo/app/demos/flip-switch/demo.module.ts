import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLFlipSwitchModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { FlipSwitchDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/flip-switch/README.md';

export function demo() {
  return {
    label: 'Flip Switch',
    tabs: {
      Demo: FlipSwitchDemoComponent,
      'README.md': {
        type: 'md',
        content: README,
      },
      'demo.component.html': {
        type: 'html',
        content: require('!raw-loader!./demo.component.html'),
      },
      'demo.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./demo.component.ts'),
      },
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLFlipSwitchModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        data: { demo },
      },
    ]),
  ],
  declarations: [FlipSwitchDemoComponent],
})
export class FlipSwitchDemoModule {}
