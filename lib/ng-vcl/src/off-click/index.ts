import { NgModule } from '@angular/core';
import { OffClickDirective, createOffClickStream } from './off-click.directive';

export { createOffClickStream, OffClickDirective };

@NgModule({
  declarations: [OffClickDirective],
  exports: [OffClickDirective],
})
export class VCLOffClickModule {}
