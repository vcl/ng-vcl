import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  VCLTourModule,
  VCLButtonModule,
  VCLNavigationModule,
  VCLInputModule,
} from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { TourDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/tour/README.md';

export function demo() {
  return {
    label: 'Tour',
    tabs: {
      Demo: TourDemoComponent,
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
    DemoModule,
    VCLTourModule,
    VCLButtonModule,
    VCLNavigationModule,
    VCLInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        data: { demo },
      },
    ]),
  ],
  declarations: [TourDemoComponent],
})
export class TourDemoModule {}
