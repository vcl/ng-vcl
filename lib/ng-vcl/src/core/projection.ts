import { Directive } from '@angular/core';

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
