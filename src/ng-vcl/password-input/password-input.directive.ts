import { Directive, Input, Output, ElementRef, HostListener, EventEmitter, Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ContentChild, OnChanges, SimpleChanges, OnInit, SkipSelf, HostBinding, Optional } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordInputContainerComponent } from './password-input-container.component';

@Directive({
  selector: 'input[vcl-password-input]',
  host: {
    '[class.vclInput]': 'true'
  }
})
export class PasswordInputDirective {

  constructor(
    private elRef: ElementRef,
    @Optional() @SkipSelf() private passwordInput: PasswordInputContainerComponent
  ) {
    if (!passwordInput) {
      throw 'vcl-password-input ,must be used within a vcl-token-input-container';
    }
  }

  @Input()
  disabled: boolean = false;

  get isDisabled() {
    return this.disabled || this.passwordInput.disabled;
  }

  @HostBinding('class.vclDisabled')
  get classDisabled() {
    return this.isDisabled;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.isDisabled ? true : null;
  }

  @HostBinding('attr.type')
  get type() {
    return this.passwordInput.visible ? 'text' : 'password';
  }
}
