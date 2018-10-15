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
import { Token } from './token.component';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TokenInputContainerComponent),
  multi: true
};

@Directive({ selector: '[vcl-token-input-pre]' })
export class TokenInputLabelPre { }

@Directive({ selector: '[vcl-token-input-post]' })
export class TokenInputLabelPost { }

@Component({
  selector: 'vcl-token-input-container',
  templateUrl: 'token-input.component.html',
  host: {
    '[class.vclInput]': 'true',
    '[class.vclTokenInput]': 'true',
    '[class.vclLayoutHorizontal]': 'true',
    '[class.vclLayoutWrap]': 'true',
    '[attr.tabindex]': '-1',
  },
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenInputContainerComponent implements ControlValueAccessor {

  tokens: Token[] = [];

  @Input()
  selectable: boolean = false;

  @Input()
  allowDuplicates: boolean = false;

  @Input()
  preselect: boolean = false;

  @Input()
  removeIcon: string = 'fa:times';

  @Input()
  removeToken: boolean = true;

  @Input()
  tabindex: number = 0;

  @Input()
  tokenClass: string | undefined;

  @Input()
  controlAsString = false;

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

  @ContentChild(TokenInputLabelPre, { read: TemplateRef })
  labelPre?: TokenInputLabelPre;

  @ContentChild(TokenInputLabelPost, { read: TemplateRef })
  labelPost?: TokenInputLabelPost;

  constructor(public elementRef: ElementRef, private cdRef: ChangeDetectorRef) { }

  removeLastToken() {
    this.tokens = [...this.tokens];
    this.tokens.pop();
    this.triggerChange();
    this.cdRef.markForCheck();
  }

  addToken(token: Token | string) {
    token = typeof token === 'string' ? { label: token } : token;

    const newToken: Token = {
      ...token,
      selected: token.selected === undefined ? this.preselect : token.selected,
      value: token.value === undefined ? token.label : token.value
    };

    if (this.allowDuplicates === false && this.tokens.some(thisToken => thisToken.value === newToken.value)) {
      return;
    }

    this.tokens = [...this.tokens, newToken];
    this.triggerChange();
    this.cdRef.markForCheck();
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
    if (this.controlAsString) {
      this.onChange(this.tokens.map(t => t.label));
    } else {
      this.onChange(this.tokens);
    }
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
  selector: 'input[vcl-token-input]'
})
export class TokenInputDirective {
  constructor(
    private elementRef: ElementRef,
    @Self() private input: InputDirective,
    @SkipSelf() private tokenInputContainer: TokenInputContainerComponent
  ) {
    if (!tokenInputContainer) {
      throw 'vcl-token-input ,must be used within a vcl-token-input-container';
    }
  }

  @Input()
  addTokenOnEnter = true;

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
    if (code == 'Backspace' && this.lastKey == 'Backspace' && value  === '') {
      // remove last token
      this.tokenInputContainer.removeLastToken();
    } else if (code == 'Enter') {
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
    } else if (this.addTokenOnEnter) {
      this.tokenInputContainer.addToken(value);
      this.elementRef.nativeElement.value = '';
    }
  }
}
