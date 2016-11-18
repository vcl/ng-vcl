import {
  Component,
  Input,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



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

  addtext: string = '';

  keydown(ev) {
    if (ev.key != 'Enter') return;
    if (this.addtext == '') return;

    if (!this.tokens) this.tokens = []; // TODO why is default not working?

    this.tokens.push({ label: this.addtext });
    this.addtext = '';
    !!this.onChangeCallback && this.onChangeCallback(this.tokens);
  }

  remove(token) {
    this.tokens = this.tokens.filter(t => t.label != token.label);
    !!this.onChangeCallback && this.onChangeCallback(this.tokens);
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(tokens: any): void {
    this.tokens = tokens;
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
