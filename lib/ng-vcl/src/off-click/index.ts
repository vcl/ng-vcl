import { NgModule } from '@angular/core';
import { OffClickDirective, createOffClickStream } from './off-click.directive';

export { createOffClickStream, OffClickDirective };

@NgModule({
  imports: [OffClickDirective],
  exports: [OffClickDirective],
})
export class VCLOffClickModule {}
