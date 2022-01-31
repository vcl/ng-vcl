import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLIconModule } from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { IconDemoComponent } from './demo.component';
import { DemoMdiIconsComponent, DemoFontAwesomeComponent } from './icons.component';
import README from '!raw-loader!@vcl/ng-vcl/icon/README.md';

export function demo() {
  return {
    label: 'Icon',
    tabs: {
      Demo: IconDemoComponent,
      'Material Design Icons Aliases': DemoMdiIconsComponent,
      'Font Awesome Icons Aliases': DemoFontAwesomeComponent,
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
      },
      'icons.component.html': {
        type: 'html',
        content: require('!raw-loader!./icons.component.html')
      },
      'icons.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./icons.component.ts')
      },
    },
  };
}

@NgModule({
    imports: [
        CommonModule,
        DemoModule,
        VCLIconModule,
        RouterModule.forChild([{
                path: '',
                component: DemoComponent,
                data: { demo }
            }]),
    ],
    declarations: [IconDemoComponent, DemoMdiIconsComponent, DemoFontAwesomeComponent]
})
export class IconDemoModule { }
