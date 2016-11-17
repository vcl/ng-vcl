import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ContentChildren,
  ContentChild,
  QueryList,
  forwardRef,
  HostListener
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'vcl-token',
  template: `
      <span class="vclTokenLabel">{{ label }}</span>
      <button *ngIf="removeable" type="button" title="Remove"
      class="vclTransparent vclButton">
        <div class="vclIcogram" (tap)="remove()">
          <span class="vclIcon fa fa-remove"></span>
        </div>
      </button>`,
  host: {
    '[class.vclToken]': 'true',
    '[class.vclSelected]': 'selected'
  }
})
export class TokenComponent {

  @Input('label') label: string;
  @Input('selected') selected: boolean = false;
  @Input('removeable') removeable: boolean = false;

  @Output('onRemove') onRemove = new EventEmitter();

  constructor() {

  }

  remove() {
    this.onRemove.emit();
  }
}



export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TokenListComponent),
  multi: true
};

@Component({
  selector: 'vcl-token-list',
  templateUrl: 'tokenlist.component.html',
  host: {
    '[class.vclTokenList]': 'true',
    '[class.vclTokenContainer]': 'true'
  },
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TokenListComponent implements ControlValueAccessor {


  @Input('tokens') tokens: any[];
  value: any[] = [];

  @Output('onChange') onChange = new EventEmitter();


  @ContentChildren(TokenComponent)
  templateItems: QueryList<TokenComponent>;

  constructor() { }

  ngAfterContentInit() { }

  ngOnInit() { }


  change() {
    this.value = this.tokens
      .filter(t => t.selected);
    this.onChange.emit(this.value);
    !!this.onChangeCallback && this.onChangeCallback(this.value);
  }



  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}













export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR2: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TokenListComponent),
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

  @Input('tokens') tokens: any[];
  addtext: string = '';

  keydown(ev) {
    if (ev.key != 'Enter') return;
    if (this.addtext == '') return;
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
