import { Component, Input, forwardRef } from '@angular/core';
import { FormFieldControl, registerControlField } from '@ng-vcl/ng-vcl';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'demo-counter',
  template: `
  <button vcl-button type="button" (click)="decrement()" style="margin-left: 5px;">-</button>
  {{counter}}
  <button vcl-button type="button" (click)="increment()">+</button>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterComponent),
    multi: true
  }]
})
export class CounterComponent implements ControlValueAccessor {
  counter = 0;
  onChange;

  increment() {
    this.counter++;
    this.onChange(this.counter);
  }
  decrement() {
    this.counter--;
    this.onChange(this.counter);
  }
  writeValue(obj: any): void {
    this.counter = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void { }
}

@Component({
  template: `
    <span *ngIf="label">{{ label }}</span><br>
    <demo-counter [formControl]="field.control"></demo-counter>
    `,
    styles: [
      `:host {
        display: block;
        padding-bottom: 2em;
      }`
    ]
})
export class FormFieldCounterComponent {
  constructor(public field: FormFieldControl) {
    this.label = field.schema.label || '';
  }
  label: string;
}

registerControlField('counter', FormFieldCounterComponent);
