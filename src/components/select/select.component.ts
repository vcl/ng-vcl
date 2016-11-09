import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  Optional,
  forwardRef
} from '@angular/core';


import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * see
 * @link http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
 */
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
};

@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SelectComponent implements ControlValueAccessor {
  @ViewChild('dropdown') dropdown;

  clickInside: boolean = false;
  popoverTarget: string = 'popoverTarget' + Math.random().toString().slice(2);

  @Output()
  select = new EventEmitter<any[]>();

  @Input()
  expanded: boolean = false;

  @Input()
  items: any[];

  @Input()
  minSelectableItems: number = 1;

  @Input()
  maxSelectableItems: number = 1;

  @Input()
  expandedIcon: string = 'fa:chevron-up';

  @Input()
  collapsedIcon: string = 'fa:chevron-down';

  @Input()
  inputValue: string = 'label';

  @Input()
  emptyLabel: string = 'Select value';

  displayValue: string;


  /** View -> model callback called when value changes */
  _onChange: (value: any) => void;

  /** View -> model callback called when select has been touched */
  _onTouched: Function;

  constructor() {
  }

  ngOnInit() {
    this.displayValue = this.emptyLabel;
  }

  expand() {
    this.expanded = !this.expanded;
  }

  selectItem(item: any) {
    this.dropdown.selectItem(item);
  }

  onSelect(items: any[]) {
    this.clickInside = true;
    this.select.emit(items);
    if (items && items[0] && this.maxSelectableItems === 1) {
      this.displayValue = items[0][this.inputValue];
    } else if (!items || items.length === 0) {
      this.displayValue = this.emptyLabel;
    } else {
      let result = '';
      for (let i = 0; i < items.length; i++) {
        result += items[i][this.inputValue];
        if (i !== items.length - 1) {
          result += ', ';
        }
      }
      this.displayValue = result;
    }
  }

  onOutsideClick(event) {
    this.expanded = false;
  }



  /**
   * Sets the select's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   * TODO(dmeyer)
   * @link https://github.com/angular/material2/blob/master/src/lib/select/select.ts
   */
  writeValue(value: any): void {
    return;
    /*    if (!this.options) { return; }

        this.options.forEach((option: MdOption) => {
          if (option.value === value) {
            option.select();
          }
        });*/
  }

  /**
   * Saves a callback function to be invoked when the select's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   * TODO(dmeyer)
   */
  registerOnChange(fn: (value: any) => void): void {
    //    this._onChange = fn;
  }

  /**
   * Saves a callback function to be invoked when the select is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   * TODO(dmeyer)
   */
  registerOnTouched(fn: Function): void {
    //    this._onTouched = fn;
  }
}
