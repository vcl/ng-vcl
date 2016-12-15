import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true
};

@Component({
  selector: 'vcl-dropdown',
  templateUrl: 'dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DropdownComponent implements ControlValueAccessor {

  @Input() items: any[];
  @Input('value') value: string[] = []; // array of values of selected items
  @Input() tabindex: number = 0;
  @Input() expanded: boolean = false;
  @Input() maxSelectableItems: number = 1;
  @Input() minSelectableItems: number = 1;
  @Input() ariaRole: string = 'listbox';

  @Output('change') change$ = new EventEmitter<any[]>();


  constructor() { }

  clickItem(item: any) {
    if (item.disabled) return;

    // prevent overflow maxSelectableItems
    if (
      !item.selected &&
      this.value.length >= this.maxSelectableItems
    ) this.items.find(i => i.selected).selected = false;

    if (
      !item.selected &&
      this.maxSelectableItems == 1
    ) this.items.map(i => i.selected = false);

    // prevent underflow minSelectableItems
    if (
      item.selected &&
      this.value.length <= this.minSelectableItems
    ) return;

    item.selected = !item.selected;
    this.value = this.items
      .filter(i => i.selected == true)
      .map(i => i.value);
    this.onChange();
  }

  onChange() {
    let outValue: any = this.value;
    if (this.maxSelectableItems <= 1)
      outValue = this.value[0];

    this.change$.emit(outValue);
    !!this.onChangeCallback && this.onChangeCallback(outValue);
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(value: any): void {
    if (!Array.isArray(value)) value = [value];
    this.value = value;
    this.items
      .forEach(i => {
        if (value.includes(i.value)) i.selected = true;
        else i.selected = false;
      });
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
