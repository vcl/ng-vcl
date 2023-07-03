import { BACKSPACE, ENTER } from '@angular/cdk/keycodes';
import {
  Component,
  Input,
  Output,
  forwardRef,
  EventEmitter,
  HostListener,
  ElementRef,
  ChangeDetectorRef,
  HostBinding,
  ChangeDetectionStrategy,
  AfterContentInit,
  Renderer2,
  ViewChild,
  Injector,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subject } from 'rxjs';

import { FormControlGroupInputState } from '../form-control-group/index';
import { InputDirective } from '../input/index';

import { Token } from './interfaces';

let uniqueID = 0;

@Component({
  selector: 'vcl-token-input',
  templateUrl: 'token-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TokenInputContainerComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenInputContainerComponent
  implements AfterContentInit, ControlValueAccessor, FormControlGroupInputState
{
  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef,
    private injector: Injector
  ) {}

  private _stateChangedEmitter = new Subject<void>();
  private _generatedId = 'vcl_token-input_' + uniqueID++;
  private _cvaDisabled = false;
  private _lastKeyCode: number | undefined;

  stateChanged = this._stateChangedEmitter.asObservable();
  controlType = 'token-input';

  @HostBinding('class.input-field')
  @HostBinding('class.token-input')
  _hostClasses = true;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this._generatedId;
  }

  get ngControl() {
    return this.injector.get(NgControl, null);
  }

  @HostBinding('class.disabled')
  get isDisabled() {
    return this._cvaDisabled || this.disabled;
  }

  get isFocused() {
    return this.input.isFocused;
  }

  get isLabelFloating() {
    return !this.isFocused && this.value.length === 0;
  }

  @Input()
  id?: string;

  @Input()
  selectable = false;

  @Input()
  addOnEnter = true;

  @Input()
  allowDuplicates = false;

  @Input()
  preselect = false;

  @Input()
  removeToken = true;

  @Input()
  value: Token[] = [];

  @Input()
  tokenClass: string | undefined;

  @Input()
  disabled = false;

  @Output()
  valueChange = new EventEmitter<Token[]>();

  @Output()
  remove = new EventEmitter<Token>();

  // Emits on enter key with no input
  @Output()
  confirm = new EventEmitter<Token[]>();

  @ViewChild(InputDirective, { read: InputDirective })
  input: InputDirective;

  @ViewChild(InputDirective, { read: ElementRef })
  inputElementRef: ElementRef<HTMLInputElement>;

  @HostBinding('class.error')
  hasError = false;

  setErrorState(error: boolean): void {
    this.hasError = error;
  }

  removeLastToken() {
    this.value = [...this.value];
    this.value.pop();
    this.triggerChange();
    this.cdRef.markForCheck();
  }

  addToken(token: Token | string) {
    token = typeof token === 'string' ? { label: token, value: token } : token;

    const newToken: Token = {
      selected: token.selected === undefined ? this.preselect : token.selected,
      ...token,
    };

    if (
      this.allowDuplicates === false &&
      this.value.some(thisToken => thisToken.value === newToken.value)
    ) {
      return;
    }

    this.value = [...this.value, newToken];
    this.triggerChange();
    this.cdRef.markForCheck();
    this.onTouched();
  }

  onInputFocus(): void {
    this._stateChangedEmitter.next();
  }
  onInputBlur(): void {
    this.onTouched();
    this._stateChangedEmitter.next();
  }

  select(token: Token) {
    if (this.selectable) {
      token.selected = !token.selected;
      this.triggerChange();
    }
  }

  onTokenRemove(token: Token) {
    this.remove.emit(token);
    if (this.removeToken) {
      this.value = this.value.filter(t => t !== token);
      this.triggerChange();
    }
  }

  triggerChange() {
    this.valueChange.emit(this.value);
    this.onChange(this.value);
  }

  onLabelClick(_: Event): void {
    this.inputElementRef.nativeElement.focus();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(value: any): void {
    if (Array.isArray(value)) {
      this.value = value
        .map(t =>
          typeof t === 'string' ? { label: t, selected: this.preselect } : t
        )
        .filter(t => typeof t === 'object' && t);
    } else {
      this.value = [];
    }
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  /**
   * remove last token on double-backspace
   */
  @HostListener('keydown', ['$event'])
  onKeydown(ev: KeyboardEvent) {
    if (ev.target !== this.inputElementRef.nativeElement) {
      return;
    }
    const value = this.inputElementRef.nativeElement.value;
    const keyCode = ev.keyCode;
    if (
      keyCode === BACKSPACE &&
      this._lastKeyCode === BACKSPACE &&
      value === ''
    ) {
      // remove last token
      this.removeLastToken();
    } else if (keyCode === ENTER) {
      ev.preventDefault();
    }
    this._lastKeyCode = keyCode;
  }

  @HostListener('keyup.enter', ['$event'])
  onKeyPressEnter(ev: KeyboardEvent) {
    if (ev.target !== this.inputElementRef.nativeElement) {
      return;
    }
    const value = this.inputElementRef.nativeElement.value;
    if (value === '') {
      this.confirm.emit();
    } else if (this.addOnEnter) {
      this.addToken(value);
      this.inputElementRef.nativeElement.value = '';
    }
  }

  ngAfterContentInit(): void {
    if (this.inputElementRef) {
      this.renderer.addClass(this.inputElementRef.nativeElement, 'flex');
    }
  }
}
