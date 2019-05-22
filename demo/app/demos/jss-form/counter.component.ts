import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'demo-counter',
  styles: [`
    vcl-icogram {
      font-size: 2.5em; user-select: none;
    }
    vcl-icon {
      cursor: pointer;
    }
  `],
  template: `
    <vcl-icogram>
      <vcl-icon vclPrepend tabindex=0 (keydown.enter)="decrement()" (click)="decrement()" icon="fas:minus-square"></vcl-icon>
      {{counter}}
      <vcl-icon vclAppend tabindex=0 (blur)="onTouched()" (keydown.enter)="increment()" (click)="increment()" icon="fas:plus-square"></vcl-icon>
    </vcl-icogram>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterComponent),
    multi: true
  }]
})
export class CounterComponent implements ControlValueAccessor {
  counter = 0;

  @Input()
  min?: number;

  @Input()
  max?: number;

  increment() {
    if (typeof this.max === 'number' && this.counter >= this.max) {
      return;
    }
    this.counter++;
    this.onChange(this.counter);
  }
  decrement() {
    if (typeof this.min === 'number' && this.counter <= this.min) {
      return;
    }
    this.counter--;
    this.onChange(this.counter);
    this.onTouched();
  }
  writeValue(obj: any): void {
    this.counter = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  onChange: (_: any) => void = () => {};
  onTouched: () => void = () => {};
}
