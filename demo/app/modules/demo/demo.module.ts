import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { VCLTabNavModule } from '@vcl/ng-vcl';

import { DemoComponent } from './demo.component';

export { DemoComponent };

@NgModule({
  imports: [
    CommonModule,
    VCLTabNavModule,
    PortalModule,
    MarkdownModule.forChild(),
  ],
  declarations: [DemoComponent],
})
export class DemoModule {}
