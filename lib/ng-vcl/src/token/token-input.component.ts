import {
  Component,
  Input, Output,
  forwardRef,
  EventEmitter,
  HostListener,
  ElementRef,
  ChangeDetectorRef,
  HostBinding,
  Directive,
  ContentChild,
  TemplateRef,
  SkipSelf,
  Self,
  ChangeDetectionStrategy,
  ViewChild,
  Optional,
  Inject
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel, NgControl } from '@angular/forms';
import { InputDirective, INPUT_HOST_TOKEN, InputHost } from '../input/index';
import { FormControlInput, FORM_CONTROL_ERROR_STATE_AGENT, FORM_CONTROL_HOST, FormControlHost, FormControlErrorStateAgent } from '../form-control-group/index';
import { Token } from './interfaces';
import { BACKSPACE, ENTER } from '@angular/cdk/keycodes';
import { Subject } from 'rxjs';

let uniqueID = 0;

@Component({
  selector: 'vcl-token-input',
  templateUrl: 'token-input.component.html',
  providers: [{
    provide: INPUT_HOST_TOKEN,
    useExisting: forwardRef(() => TokenInputContainerComponent),
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenInputContainerComponent implements ControlValueAccessor, FormControlInput, InputHost {

  constructor(
    public elementRef: ElementRef,
    private cdRef: ChangeDetectorRef,
    @Optional() @Self()
    public ngControl?: NgControl,
    @Optional() @Inject(FORM_CONTROL_HOST)
    private formControlHost?: FormControlHost,
    @Optional() @Inject(FORM_CONTROL_ERROR_STATE_AGENT)
    private _errorStateAgent?: FormControlErrorStateAgent,
  ) {
    // Set valueAccessor instead of providing it to avoid circular dependency of NgControl
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  private _stateChangedEmitter = new Subject<void>();
  private _generatedId = 'vcl_token-input_' + uniqueID++;
  private _cvaDisabled = false;
  private _lastKeyCode: number | undefined;

  stateChanged = this._stateChangedEmitter.asObservable();
  controlType = 'token-input';

  @HostBinding('class.vclInput')
  @HostBinding('class.vclTokenInput')
  @HostBinding('class.vclLayoutHorizontal')
  @HostBinding('class.vclLayoutWrap')
  _hostClasses = true;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this._generatedId;
  }

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this._cvaDisabled || this.disabled;
  }

  get isFocused() {
    return this.input.isFocused;
  }

  @HostBinding('class.vclError')
  get hasError() {
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
  }

  @HostBinding('attr.tabindex')
  _hostAttrTabindex = -1;

  @Input()
  errorStateAgent?: FormControlErrorStateAgent;

  @Input()
  id?: string;

  @Input()
  selectable = false;

  @Input()
  addOnEnter = true;

  @Input()
  allowDuplicates = false;

  @Input()
  preselect = true;

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

  @ContentChild(InputDirective, { read: InputDirective, static: false })
  input: InputDirective;

  @ContentChild(InputDirective, { read: ElementRef, static: false })
  inputElementRef: ElementRef<HTMLInputElement>;

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

    if (this.allowDuplicates === false && this.value.some(thisToken => thisToken.value === newToken.value)) {
      return;
    }

    this.value = [...this.value, newToken];
    this.triggerChange();
    this.cdRef.markForCheck();
    this.onTouched();
  }

  notifyInputFocus(btn: InputDirective): void {
    this._stateChangedEmitter.next();
  }
  notifyInputBlur(btn: InputDirective): void {
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

  onLabelClick(event: Event): void {
    this.inputElementRef.nativeElement.focus();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(value: any): void {
    if (Array.isArray(value)) {
      this.value = value.map(t => typeof t === 'string' ? {label: t, selected: this.preselect} : t)
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
    if (keyCode === BACKSPACE && this._lastKeyCode === BACKSPACE && value  === '') {
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
}
