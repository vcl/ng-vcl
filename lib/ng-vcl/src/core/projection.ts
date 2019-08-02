import { Directive, NgModule } from '@angular/core';

@Directive({ selector: '[vclPrepend]' })
export class PrependDirective {
  constructor() { }
}

@Directive({ selector: '[vclAppend]' })
export class AppendDirective {
  constructor() { }
}

@NgModule({
  exports: [ PrependDirective, AppendDirective ],
  declarations: [ PrependDirective, AppendDirective],
})
export class VCLCoreContentProjectionModule { }
