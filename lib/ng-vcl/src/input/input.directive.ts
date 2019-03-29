import { Directive, ElementRef, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: 'input[vclInput]',
  exportAs: 'vclInput'
})
export class InputDirective {

  constructor(private elRef: ElementRef<HTMLInputElement>) { }

  @Input()
  disabled = false;

  @Input()
  autoselect = false;

  @HostBinding('class.vclInput')
  classVclInput = true;

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.disabled;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? true : null;
  }

  // Autoselect
  @HostListener('focus')
  onFocus() {
    if (this.autoselect) {
      this.elRef.nativeElement.select();
    }
  }
}
