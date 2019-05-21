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
  ChangeDetectionStrategy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputDirective } from '../input/index';
import { Token } from './interfaces';

@Component({
  selector: 'vcl-token-input-container',
  templateUrl: 'token-input.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TokenInputContainerComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenInputContainerComponent implements ControlValueAccessor {

  tokens: Token[] = [];

  @HostBinding('class.vclInput')
  @HostBinding('class.vclTokenInput')
  @HostBinding('class.vclLayoutHorizontal')
  @HostBinding('class.vclLayoutWrap')
  _hostClasses = true;

  @HostBinding('attr.tabindex')
  _hostAttrTabindex = -1;

  @Input()
  selectable = false;

  @Input()
  allowDuplicates = false;

  @Input()
  preselect = false;

  @Input()
  removeToken = true;

  @Input()
  tabindex = 0;

  @Input()
  tokenClass: string | undefined;

  @HostBinding('class.vclDisabled')
  @Input()
  disabled = false;

  @Output()
  tokensChange = new EventEmitter<Token[]>();

  @Output()
  remove = new EventEmitter<Token>();

  // Emits on enter key with no input
  @Output()
  confirm = new EventEmitter<Token[]>();

  constructor(public elementRef: ElementRef, private cdRef: ChangeDetectorRef) { }

  removeLastToken() {
    this.tokens = [...this.tokens];
    this.tokens.pop();
    this.triggerChange();
    this.cdRef.markForCheck();
  }

  addToken(token: Token | string) {
    token = typeof token === 'string' ? { label: token, value: token } : token;

    const newToken: Token = {
      selected: token.selected === undefined ? this.preselect : token.selected,
      ...token,
    };

    if (this.allowDuplicates === false && this.tokens.some(thisToken => thisToken.value === newToken.value)) {
      return;
    }

    this.tokens = [...this.tokens, newToken];
    this.triggerChange();
    this.cdRef.markForCheck();
    this.onTouched();
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
      this.tokens = this.tokens.filter(t => t !== token);
      this.triggerChange();
    }
  }

  triggerChange() {
    this.tokensChange.emit(this.tokens);
    this.onChange(this.tokens);
  }

  onBlur() {
    this.onTouched();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(tokens: any): void {
    if (Array.isArray(tokens)) {
      this.tokens = tokens.map(t => typeof t === 'string' ? {label: t, selected: this.preselect} : t)
                          .filter(t => typeof t === 'object' && t);
    } else {
      this.tokens = [];
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
}


@Directive({
  selector: 'input[vclTokenInput]'
})
export class TokenInputDirective {
  constructor(
    private elementRef: ElementRef,
    @Self() private input: InputDirective,
    @SkipSelf() private tokenInputContainer: TokenInputContainerComponent
  ) {
    if (!tokenInputContainer) {
      throw new Error('vcl-token-input ,must be used within a vcl-token-input-container');
    }
  }

  // tslint:disable-next-line:no-input-rename
  @Input('vclTokenInputAddOnEnter')
  addOnEnter = true;

  get isDisabled() {
    return this.input.disabled || this.tokenInputContainer.disabled;
  }

  @HostBinding('class.vclDisabled')
  get classDisabled() {
    return this.isDisabled;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.isDisabled ? true : null;
  }
  /**
   * remove last token on double-backspace
   */
  private lastKey: string | undefined;
  @HostListener('keydown', ['$event'])
  onKeydown(ev) {
    const value = ev.target.value;
    const code = ev && (ev.code || ev.key); // fallback for ie11
    if (code === 'Backspace' && this.lastKey === 'Backspace' && value  === '') {
      // remove last token
      this.tokenInputContainer.removeLastToken();
    } else if (code === 'Enter') {
      ev.preventDefault();
    } else if (code) {
      this.lastKey = code;
    }
  }
  @HostListener('keyup.enter', ['$event'])
  onKeyPressEnter(ev) {
    const value = ev.target.value;
    if (value === '') {
      this.tokenInputContainer.confirm.emit();
    } else if (this.addOnEnter) {
      this.tokenInputContainer.addToken(value);
      this.elementRef.nativeElement.value = '';
    }
  }
}
