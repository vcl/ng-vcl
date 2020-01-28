import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLProgressBarModule} from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { ProgressBarDemoComponent } from './demo.component';
import README from '@vcl/ng-vcl/progress-bar/README.md';

export function demo() {
  return {
    label: 'Progress-Bar',
    tabs: {
      Demo: ProgressBarDemoComponent,
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
    DemoModule,
    VCLProgressBarModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ ProgressBarDemoComponent ],
  declarations: [ ProgressBarDemoComponent ]
})
export class ProgressBarDemoModule { }
