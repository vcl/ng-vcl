import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';

export function demo() {
  return {
    label: 'L10n',
    tabs: {
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!@ng-vcl/ng-vcl/l10n/README.md')
      }
    },
  };
}

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [],
  declarations: []
})
export class L10nDemoModule { };
