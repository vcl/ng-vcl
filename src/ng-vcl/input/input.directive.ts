import { Directive, ElementRef, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: 'input[vcl-input]',
  host: {
    '[class.vclInput]': 'true'
  }
})
export class InputDirective {

  @HostBinding('class.vclDisabled')
  @Input()
  disabled: boolean = false;

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? true : null;
  }
}

@Directive({
  selector: 'input[vcl-input-autoselect]',
})
export class InputAutoSelectDirective {

  constructor(private elRef: ElementRef) {}

  // Autoselect
  @HostListener('focus')
  onFocus() {
    this.elRef.nativeElement.select();
  }
}
