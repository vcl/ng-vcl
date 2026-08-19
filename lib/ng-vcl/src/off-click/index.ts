import { NgModule } from '@angular/core';
import {
  VCLOffClickDirective,
  createOffClickStream,
} from './off-click.directive';

export { createOffClickStream, VCLOffClickDirective };

@NgModule({
  imports: [VCLOffClickDirective],
  exports: [VCLOffClickDirective],
})
export class VCLOffClickModule {}
