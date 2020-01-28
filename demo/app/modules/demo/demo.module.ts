import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLTabNavModule } from '@vcl/ng-vcl';
import { DemoComponent } from './demo.component';
import { PortalModule } from '@angular/cdk/portal';

export { DemoComponent };

@NgModule({
  imports: [
    CommonModule,
    VCLTabNavModule,
    PortalModule
  ],
  declarations: [ DemoComponent, ]
})
export class DemoModule { }
