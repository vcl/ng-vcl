import { Directive, NgModule } from '@angular/core';

@Directive({
  selector: '[vclPrepend]',
})
export class PrependDirective {
  constructor() {}
}

@Directive({
  selector: '[vclAppend]',
})
export class AppendDirective {
  constructor() {}
}

@NgModule({
  imports: [PrependDirective, AppendDirective],
  exports: [PrependDirective, AppendDirective],
})
export class VCLCoreContentProjectionModule {}
