import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  ViewChild,
  forwardRef
} from '@angular/core';
import { MetalistComponent } from '../metalist/metalist.component';
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
  @ViewChild('metalist') metalist;

  @Input() items: any[];
  @Input() tabindex: number = 0;
  @Input() expanded: boolean = false;
  @Input() maxSelectableItems: number = 1;
  @Input() minSelectableItems: number = 1;
  @Input() ariaRole: string = 'listbox';

  @Output() expandedChange = new EventEmitter<boolean>();
  @Output() select = new EventEmitter<any[]>();

  selected: any[];

  _selectItem(item: any, meta, metalist: MetalistComponent) {
    if (item.disabled) return;

    if (this.maxSelectableItems === 1) {
      this.expanded = false;
      this.expandedChange.emit(this.expanded);
      metalist.selectItem(item);
    } else {
      if (meta.selected) {
        metalist.deSelectItem(item);
      } else {
        metalist.selectItem(item);
      }
    }
  }

  selectItem(item: any) {
    this.metalist.selectItem(item);
  }

  onSelect(selectedItems: any[]) {
    this.select.emit(selectedItems);
  }

  ngAfterContentInit() { }

  metaInformation: any = [];


  constructor() {
    this.select.subscribe(selectedItems => {
      this.selected = selectedItems;
      !!this.onChangeCallback && this.onChangeCallback(selectedItems);
    });
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
