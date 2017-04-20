import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
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
export class DemoModule { };
