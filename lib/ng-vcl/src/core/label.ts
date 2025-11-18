// import { Input, HostBinding, HostListener, Inject, Optional, ElementRef, Directive, ChangeDetectorRef, InjectionToken, OnInit, OnDestroy, NgModule, Injectable } from '@angular/core';
// import { Observable, Subscription } from 'rxjs';

import { NgModule, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'vcl-label, [vclLabel]',
})
export class VCLLabelDirective {
  constructor(protected elementRef: ElementRef<HTMLElement>) {}

  @Input('label')
  _label?: string;

  get label() {
    return this._label || this.elementRef.nativeElement.innerText;
  }
}

@Directive({
  selector: 'vcl-sub-label, [vclSubLabel]',
})
export class VCLSubLabelDirective extends VCLLabelDirective {
  constructor(elementRef: ElementRef<HTMLElement>) {
    super(elementRef);
  }
}
@NgModule({
  imports: [VCLLabelDirective, VCLSubLabelDirective],
  exports: [VCLLabelDirective, VCLSubLabelDirective],
})
export class VCLCoreLabelModule {}
