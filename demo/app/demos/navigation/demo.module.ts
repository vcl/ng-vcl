import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLNavigationModule, VCLButtonModule, VCLIcogramModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { NavigationDemoComponent } from './demo.component';
import README from '@ng-vcl/ng-vcl/navigation/README.md';

export function demo() {
  return {
    label: 'Navigation',
    tabs: {
      Demo: NavigationDemoComponent,
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
    VCLNavigationModule,
    VCLButtonModule,
    VCLIcogramModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ NavigationDemoComponent ],
  declarations: [ NavigationDemoComponent ]
})
export class NavigationDemoModule { }
