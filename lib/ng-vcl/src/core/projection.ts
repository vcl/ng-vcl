import {
  Directive,
  NgModule,
} from '@angular/core';

@Directive({
    selector: '[vclPrepend]',
    standalone: false
})
export class PrependDirective {
  constructor() {}
}

@Directive({
    selector: '[vclAppend]',
    standalone: false
})
export class AppendDirective {
  constructor() {}
}

@NgModule({
  exports: [PrependDirective, AppendDirective],
  declarations: [PrependDirective, AppendDirective],
})
export class VCLCoreContentProjectionModule {}
