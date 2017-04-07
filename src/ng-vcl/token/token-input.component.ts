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
  ChangeDetectionStrategy
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
    '[attr.tabindex]': '0'
  },
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenInputComponent implements ControlValueAccessor {

  tokens: Token[] = [];

  @Output()
  change = new EventEmitter();

  @ViewChild('input')
  input: ElementRef;

  @Input()
  selectable: boolean = true;

  @HostListener('focus', ['$event'])
  async onFocus(ev?) {
    await new Promise(res => setTimeout(res, 0));
    this.input.nativeElement.focus();
  }

  /**
   * remove last token on double-backspace
   */
  lastKey: string | null = null;
  @HostListener('keydown', ['$event'])
  async onKeydown(ev?: KeyboardEvent) {
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

  onChange(event: Event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
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
    this.onChangeCallback && this.onChangeCallback(this.tokens);
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(tokens: any): void {
    if (Array.isArray(tokens)) {
      this.tokens = tokens.map(t => typeof t === 'string' ? {label: t, selected: false} : t)
                          .filter(t => typeof t === 'object' && t);
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
