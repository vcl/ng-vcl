import {
  Input,
  Component,
  ChangeDetectionStrategy,
  ContentChild,
  AfterContentInit,
  HostBinding,
  forwardRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

import { ButtonComponent } from '../button/index';
import {
  InputDirective,
  FORM_CONTROL_EMBEDDED_LABEL_INPUT,
  EmbeddedInputFieldLabelInput,
} from '../input/index';

@Component({
  templateUrl: 'password-input.component.html',
  selector: 'vcl-password-input',
  exportAs: 'vclPasswordInput',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: FORM_CONTROL_EMBEDDED_LABEL_INPUT,
      useExisting: forwardRef(() => PasswordInputComponent),
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent
  implements AfterContentInit, AfterViewInit, EmbeddedInputFieldLabelInput
{
  private stateChangedEmitter = new Subject<void>();

  @HostBinding('class.input-field')
  hostClasses = true;

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.input?.isDisabled;
  }
  get stateChanged() {
    return this.stateChangedEmitter.asObservable();
  }
  get isLabelFloating() {
    return !this.isFocused && this.input?.value === '';
  }

  @HostBinding('class.focused')
  get isFocused() {
    return !!this.input?.isFocused || !!this.button?.isFocused;
  }

  @HostBinding('class.error')
  get hasError() {
    return this.input.hasError;
  }

  get value() {
    return this.input.value;
  }

  @ContentChild(InputDirective, { read: InputDirective })
  input?: InputDirective;

  @ViewChild(ButtonComponent, { read: ButtonComponent })
  button?: ButtonComponent;

  @Input()
  visible = false;

  autocomplete = 'current-password';

  toggle() {
    this.visible = !this.visible;
    this.updateType();
  }

  updateType() {
    this.input.elementRef.nativeElement.type = this.visible
      ? 'text'
      : 'password';
  }

  notifyInputFocus(_: InputDirective): void {}
  notifyInputBlur(_: InputDirective): void {}

  ngAfterContentInit() {
    this.updateType();
  }

  ngAfterViewInit() {
    this.input.stateChanged.subscribe(this.stateChangedEmitter);
  }
}
