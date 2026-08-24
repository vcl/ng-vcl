import { Directive, NgModule } from '@angular/core';

@Directive({
  selector: '[vclPrepend]',
})
export class VCLPrependDirective {
  constructor() {}
}

@Directive({
  selector: '[vclAppend]',
})
export class VCLAppendDirective {
  constructor() {}
}

@NgModule({
  exports: [VCLPrependDirective, VCLAppendDirective],
  imports: [VCLPrependDirective, VCLAppendDirective],
})
export class VCLCoreContentProjectionModule {}
