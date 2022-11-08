import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  VCLLayerModule,
  VCLButtonModule,
  VCLIconModule,
  VCLPanelModule,
} from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { LayerDemoComponent } from './demo.component';
import { NagComponent, NagLayer } from './nag.component';
import { BarComponent } from './bar.component';
import README from '!raw-loader!@vcl/ng-vcl/layer/README.md';

export function demo() {
  return {
    label: 'Layer',
    tabs: {
      Demo: LayerDemoComponent,
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
      'nag.component.html': {
        type: 'html',
        content: require('!raw-loader!./nag.component.html'),
      },
      'nag.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./nag.component.ts'),
      },
      'bar.component.html': {
        type: 'html',
        content: require('!raw-loader!./bar.component.html'),
      },
      'bar.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./bar.component.ts'),
      },
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    VCLLayerModule,
    VCLButtonModule,
    VCLIconModule,
    VCLPanelModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
        data: { demo },
      },
    ]),
  ],
  declarations: [LayerDemoComponent, BarComponent, NagComponent],
  providers: [NagLayer],
})
export class LayerDemoModule {}
