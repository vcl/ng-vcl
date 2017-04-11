import {
  Component,
  Input, Output,
  forwardRef,
  EventEmitter,
  HostListener,
  ContentChildren,
  ElementRef,
  ViewChild,
  QueryList,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostBinding
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputDirective } from '../input/index';
import { TokenComponent, Token } from './token.component';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TokenInputComponent),
  multi: true
};

@Component({
  selector: 'vcl-token-input',
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
export class TokenInputComponent implements ControlValueAccessor {

  tokens: Token[] = [];

  @ViewChild('input')
  input: ElementRef;

  @Input()
  selectable: boolean = true;

  @Input()
  tabindex: number = 0;

  @HostListener('focus', ['$event'])
  async onFocus(ev?) {
    await new Promise(res => setTimeout(res, 1000));
    this.input.nativeElement.focus();
  }

  @HostBinding('class.vclFocused')
  focused = false;

  onInputFocus() {
    this.focused = true;
  }

  onInputBlur() {
    this.focused = false;
    this.onTouched();
  }

  get vclFocused() {
    return this.input && typeof document !== 'undefined' && document.activeElement === this.input.nativeElement;
  }

  /**
   * remove last token on double-backspace
   */
  lastKey: string | null = null;
  @HostListener('keydown', ['$event'])
  onKeydown(ev?: KeyboardEvent) {
    const code = ev && (ev.code || ev.key); // fallback for ie11
    if (code == 'Backspace' && this.lastKey == 'Backspace' && this.input.nativeElement.value === '') {
      // remove last token
      this.tokens.pop();
      this.triggerChange();
    }
    else if (code) {
      this.lastKey = code;
    }
  }

  @Output()
  change = new EventEmitter();

  add(label: string) {
    if (label) {
      this.tokens.push({
        selected: false,
        label
      });
      this.input.nativeElement.value = '';
      this.triggerChange();
    }
  }

  select(token: Token) {
    if (this.selectable) {
      token.selected = !token.selected;
      this.triggerChange();
    }
  }

  remove(token: Token) {
    this.tokens = this.tokens.filter(t => t !== token);
    this.triggerChange();
  }

  triggerChange() {
    this.change.emit(this.tokens);
    this.onChange(this.tokens);
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(tokens: any): void {
    if (Array.isArray(tokens)) {
      this.tokens = tokens.map(t => typeof t === 'string' ? {label: t, selected: false} : t)
                          .filter(t => typeof t === 'object' && t);
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
