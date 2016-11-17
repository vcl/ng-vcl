import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ContentChildren,
  QueryList,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';


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
  host: {},
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TokenListComponent implements ControlValueAccessor {


  @Input('tokens') tokens: any[];
  selected: any[] = [];

  @Output('onChange') onChange = new EventEmitter();


  @ContentChildren(TokenComponent)
  templateItems: QueryList<TokenComponent>;

  constructor() { }

  ngAfterContentInit() { }

  ngOnInit() { }


  change() {
    this.selected = this.tokens.filter(t => t.selected);
    this.onChange.emit(this.selected);
    !!this.onChangeCallback && this.onChangeCallback(this.selected);
  }



  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(value: any): void {
    if (value !== this.selected) {
      this.selected = value;
    }
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
