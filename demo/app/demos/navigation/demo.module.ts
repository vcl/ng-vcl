import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLNavigationModule, VCLButtonModule, VCLIcogramModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { NavigationDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/navigation/README.md';

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
        DemoModule,
        VCLNavigationModule,
        VCLButtonModule,
        VCLIcogramModule,
        RouterModule.forChild([{
                path: '',
                component: DemoComponent,
                data: { demo }
            }]),
    ],
    declarations: [NavigationDemoComponent]
})
export class NavigationDemoModule { }
