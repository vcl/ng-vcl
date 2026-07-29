import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './demo.component';
import { PortalModule } from '@angular/cdk/portal';
import { MarkdownModule } from 'ngx-markdown';

export { DemoComponent };

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    MarkdownModule.forChild(),
    DemoComponent,
  ],
})
export class DemoModule {}
