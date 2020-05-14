import { Directive, NgModule, ElementRef, Optional } from '@angular/core';

@Directive({ selector: '[vclPrepend]' })
export class PrependDirective {
  constructor() { }
}

@Directive({ selector: '[vclAppend]' })
export class AppendDirective {
  constructor() { }
}

@Directive({ selector: 'vcl-label, [vclLabel]' })
export class LabelDirective {
  constructor(private elementRef: ElementRef<HTMLElement>) { }

  get label() {
    return this.elementRef.nativeElement.innerText;
  }
}

@Directive({ selector: 'vcl-sub-label, [vclSubLabel]' })
export class SubLabelDirective {
  constructor(private elementRef: ElementRef<HTMLElement>) { }

  get label() {
    return this.elementRef.nativeElement.innerText;
  }
}

@NgModule({
  exports: [ PrependDirective, AppendDirective, LabelDirective, SubLabelDirective ],
  declarations: [ PrependDirective, AppendDirective, LabelDirective, SubLabelDirective],
})
export class VCLCoreContentProjectionModule { }
