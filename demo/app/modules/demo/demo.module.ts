import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLTabNavModule } from '@vcl/ng-vcl';
import { DemoComponent } from './demo.component';
import { PortalModule } from '@angular/cdk/portal';
import { MarkdownModule } from 'ngx-markdown';

export { DemoComponent };

@NgModule({
  imports: [
    CommonModule,
    VCLTabNavModule,
    PortalModule,
    MarkdownModule.forChild()
  ],
  declarations: [ DemoComponent, ]
})
export class DemoModule { }
