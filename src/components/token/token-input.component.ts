import {
  Component,
  Input, Output,
  forwardRef,
  EventEmitter,
  ContentChildren,
  QueryList
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { TokenComponent } from './token.component';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR2: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TokenInputComponent),
  multi: true
};

@Component({
  selector: 'vcl-token-input',
  templateUrl: 'tokeninput.component.html',
  host: {
    '[class.vclInput]': 'true',
    '[class.vclTokenInput]': 'true'
  },
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR2]
})
export class TokenInputComponent implements ControlValueAccessor {

  @Input('tokens') tokens: any[] = [];
  @Output('change') onChange = new EventEmitter();
  value: any[];

  @ContentChildren(TokenComponent)
  templateItems: QueryList<TokenComponent>;

  addtext: string = '';


  ngAfterContentInit() {
    // transform template-items if available
    let templateItemsAr = this.templateItems.toArray();
    if (templateItemsAr.length > 0) {
      this.tokens = templateItemsAr.map(i => i.toObject());
    }
  }

  keydown(ev) {
    if (ev.key != 'Enter') return;
    if (this.addtext == '') return;

    this.tokens.push({ label: this.addtext });
    this.addtext = '';

    this.onChange.emit(this.tokens);

    !!this.onChangeCallback && this.onChangeCallback(this.tokens);
  }

  remove(token) {
    this.tokens = this.tokens.filter(t => t.label != token.label);
    this.onChange.emit(this.tokens);
    !!this.onChangeCallback && this.onChangeCallback(this.tokens);
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(tokens: Object[]): void {
    this.tokens = tokens;
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
