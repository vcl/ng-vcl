import { NgModule, Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: 'vcl-label, [vclLabel]' })
export class LabelDirective {
  constructor(protected readonly elementRef: ElementRef<HTMLElement>) {}

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('label')
  _label?: string;

  get label() {
    return this._label || this.elementRef.nativeElement.innerText;
  }
}

@Directive({ selector: 'vcl-sub-label, [vclSubLabel]' })
export class SubLabelDirective extends LabelDirective {
  constructor(elementRef: ElementRef<HTMLElement>) {
    super(elementRef);
  }
}

@NgModule({
  exports: [LabelDirective, SubLabelDirective],
  declarations: [LabelDirective, SubLabelDirective],
})
export class VCLCoreLabelModule {}
