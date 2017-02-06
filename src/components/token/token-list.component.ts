import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { TokenComponent } from './token.component';


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

  ngAfterContentInit() {
    // transform template-items if available
    let templateItemsAr = this.templateItems.toArray();
    if (templateItemsAr.length > 0) {
      this.tokens = templateItemsAr.map(i => i.toObject());
    }
  }

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
