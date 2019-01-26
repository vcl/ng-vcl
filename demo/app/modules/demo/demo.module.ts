import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLTabNavModule, VCLWormholeModule } from '@ng-vcl/ng-vcl';
import { DemoComponent } from './demo.component';

export { DemoComponent };

@NgModule({
  imports: [
    CommonModule,
    VCLTabNavModule,
    VCLWormholeModule
  ],
  declarations: [ DemoComponent, ]
})
export class DemoModule { }
