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
  host: {},
  //changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class RadioGroupComponent implements OnInit, OnChanges, ControlValueAccessor {

  @Input('value') value: string;
  @Input('options') options: any[];

  constructor() { }

  ngOnInit() {
    console.dir(this.value);
  }

  ngOnChanges() { }



  isChecked(option) {
    return option.value == this.value;
  }



  buttonChanged(value, state) {
    console.log('btn changeD:');
    this.value = value;
    !!this.onChangeCallback && this.onChangeCallback(this.value);
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
