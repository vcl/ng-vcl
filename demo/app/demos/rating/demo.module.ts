import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DemoComponent, DemoModule} from './../../modules/demo/demo.module';
import {RatingDemoComponent} from './demo.component';
import {VCLRatingModule} from '@vcl/ng-vcl';
import README from '@vcl/ng-vcl/rating/README.md';

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
