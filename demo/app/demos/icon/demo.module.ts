import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VCLIconModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { IconDemoComponent } from './demo.component';
import { DemoMdiIconsComponent, DemoFontAwesomeComponent } from './icons.component';

export function demo() {
  return {
    label: 'Icon',
    tabs: {
      Demo: IconDemoComponent,
      'Material Design Icons Aliases': DemoMdiIconsComponent,
      'Font Awesome Icons Aliases': DemoFontAwesomeComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/icon/README.md')
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      },
      'icons.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./icons.component.html')
      },
      'icons.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./icons.component.ts')
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
      data: {demo}
    }]),
  ],
  entryComponents: [ IconDemoComponent, DemoMdiIconsComponent, DemoFontAwesomeComponent ],
  declarations: [ IconDemoComponent, DemoMdiIconsComponent, DemoFontAwesomeComponent ]
})
export class IconDemoModule { }
