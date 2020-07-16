import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DemoComponent, DemoModule} from './../../modules/demo/demo.module';
import {RatingDemoComponent} from './demo.component';
import {VCLRatingModule} from '@vcl/ng-vcl';
import README from '!raw-loader!@vcl/ng-vcl/rating/README.md';

export function demo() {
  return {
    label: 'Rating',
    tabs: {
      Demo: RatingDemoComponent,
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
    VCLRatingModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [RatingDemoComponent],
  declarations: [RatingDemoComponent]
})
export class RatingDemoModule {
}
