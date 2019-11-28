import {
  Component,
  Input, Output,
  forwardRef,
  EventEmitter,
  HostListener,
  ElementRef,
  ChangeDetectorRef,
  HostBinding,
  ContentChild,
  Self,
  ChangeDetectionStrategy,
  Optional,
  Inject,
  AfterContentInit,
  OnDestroy,
  Renderer2
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Token } from './interfaces';
import { BACKSPACE, ENTER } from '@angular/cdk/keycodes';
import { Subject, merge } from 'rxjs';
import { FormControlInput, FORM_CONTROL_ERROR_STATE_AGENT, FORM_CONTROL_HOST, FormControlHost, FormControlErrorStateAgent } from '../form-control-group/index';
import { InputDirective, INPUT_HOST_TOKEN, InputHost } from '../input/index';
import { FormControlMaterialInput, FORM_CONTROL_MATERIAL_INPUT } from '../material-design-inputs/index';

let uniqueID = 0;

@Component({
  selector: 'vcl-token-input',
  templateUrl: 'token-input.component.html',
  providers: [{
    provide: INPUT_HOST_TOKEN,
    useExisting: forwardRef(() => TokenInputContainerComponent),
  }, {
    provide: FORM_CONTROL_MATERIAL_INPUT,
    useExisting: forwardRef(() => TokenInputContainerComponent),
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenInputContainerComponent implements AfterContentInit, ControlValueAccessor, FormControlInput, InputHost, FormControlMaterialInput {

  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer2,
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

  @HostBinding('class.input')
  @HostBinding('class.token-input')
  @HostBinding('class.row')
  @HostBinding('class.layout-wrap')
  _hostClasses = true;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this._generatedId;
  }

  @HostBinding('class.disabled')
  get isDisabled() {
    return this._cvaDisabled || this.disabled;
  }

  get isFocused() {
    return this.input.isFocused;
  }

  get isLabelFloating() {
    return this.input.isLabelFloating || (this.value && this.value.length > 0);
  }


  @HostBinding('class.error')
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

  ngAfterContentInit(): void {
    if (this.inputElementRef) {
      this.renderer.addClass(this.inputElementRef.nativeElement, 'flex');
    }
  }
}
