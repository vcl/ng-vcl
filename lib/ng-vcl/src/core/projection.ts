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
  imports: [VCLPrependDirective, VCLAppendDirective],
  exports: [VCLPrependDirective, VCLAppendDirective],
})
export class VCLCoreContentProjectionModule {}
