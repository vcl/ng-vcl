import {Component, Input} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  template: `<span>{{ message }} {{ counter }}</span><br>
  <button vcl-button type="button" class="vclButton" [disabled]="disabled" (click)="increment()">+</button>
  <button vcl-button type="button" class="vclButton" [disabled]="disabled" (click)="decrement()" style="margin-left: 5px;">-</button>`
})
export class CustomSampleComponent implements ControlValueAccessor {

  @Input()
  private message = '';

  private disabled = false;

  private _counter = 0;

  get counter(): number {
    return this._counter;
  }

  set counter(value: number) {
    this._counter = value;
    this.onChangeCallback && this.onChangeCallback(value);
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: number | undefined) => void;

  writeValue(value: number): void {
    this._counter = value;
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

}
