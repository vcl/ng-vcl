import { Directive, Input, Output, ElementRef, HostListener, EventEmitter, Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ContentChild, OnChanges, SimpleChanges, OnInit, SkipSelf, HostBinding, Optional } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordInputComponent } from './password-input.component';
import { InputDirective } from '../input/index';

@Directive({
  selector: 'input[vcl-password-input]'
})
export class PasswordInputDirective {

  constructor(
    private input: InputDirective,
    @SkipSelf() private passwordInput: PasswordInputComponent
  ) { }

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
