import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLFlipSwitchModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { FlipSwitchDemoComponent } from './demo.component';
import README from '@vcl/ng-vcl/flip-switch/README.md';

export function demo() {
  return {
    label: 'Flip-Switch',
    tabs: {
      Demo: FlipSwitchDemoComponent,
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
      }
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLFlipSwitchModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ FlipSwitchDemoComponent ],
  declarations: [ FlipSwitchDemoComponent ]
})
export class FlipSwitchDemoModule { }
