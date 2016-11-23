import { Observable } from 'rxjs/Observable';
// TODO: This class is just a copy of the checkbox with slight modifications
// Use inheritance once supported
// https://github.com/angular/angular/issues/11606

import {
  ChangeDetectionStrategy,
  Component,
  Input, Output,
  OnInit, HostBinding, HostListener, OnChanges,
  SimpleChanges, EventEmitter, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true
};

@Component({
  selector: 'vcl-radio-group',
  templateUrl: 'radio-group.component.html',
  host: {
    '[attr.role]': '"radio"',
    '[class.vclCheckbox]': 'true',
    '[class.vclScale130p]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class RadioGroupComponent implements OnInit, OnChanges, ControlValueAccessor {

  @Input('value') value: string;
  @Input('options') options: any[];
  @Input('disabled') disabled: boolean = false;

  constructor() {
    /*    this._checkedChange.subscribe(newVal => {
          !!this.onChangeCallback && this.onChangeCallback(newVal);
        });
      */
  }

  ngOnInit() { }

  ngOnChanges() { }



  isChecked(option) {
    return option.value == this.value;
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(value: boolean): void {
    /*    if (value !== this.checked) {
          this.checked = value;
        }*/
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
