import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, SimpleChanges, forwardRef, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { RadioButtonComponent } from './radio-button.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

export enum SelectionMode {
  Single,
  Multiple
}

/* change event paremter. Emitted when selected buttons have changed */
export interface RadioGroupChange {
  source: RadioButtonComponent;
  value: any;
}

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true
};

@Component({
  selector: 'vcl-radio-group',
  template: `<ng-content></ng-content>`,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent implements OnDestroy, ControlValueAccessor {

  checkedSubscription: Subscription | undefined;

  private _value: any;

  @Input()
  set value(value: any) {
    this._value = value;
    this.updateRadioButtons();
  }

  get value() {
    return this._value;
  }

  @Output('change')
  valueChange = new EventEmitter<any>();

  @Output('change')
  change = new EventEmitter<RadioGroupChange>();

  updateValue(value: any, source: RadioButtonComponent) {
    this.value = value;
    this.onChangeCallback && this.onChangeCallback(this.value);
    this.valueChange.emit(this.value);
    this.change.emit({
      value: this.value,
      source
    });
  }

  @ContentChildren(RadioButtonComponent)
  radioButtons: QueryList<RadioButtonComponent>;

  ngAfterContentInit() {
    // When not using ngModel
    if (!this.onChangeCallback) {
      // and value is provided
      if (this.value !== undefined && this.value !== null) {
        // update radio buttons so they match the provided value
        this.updateRadioButtons();
      } else {
        // else update value to match the selected radio button
        this.radioButtons.toArray().every(function(rbtn, idx) {
            if (rbtn.checked) {
              const newValue = rbtn.value === undefined ? idx : rbtn.value;
              this.updateValue(newValue, rbtn);
              return false;
            }
            return true;
        });
      }
    }

    // Subscribes to radio button change event
    const listenChange = () => {
      this.dispose();
      const checked$ = Observable.merge(...(this.radioButtons.map((rbtn, idx) => rbtn.checkedChange.map(() => ({rbtn, idx})))));

      this.checkedSubscription = checked$.subscribe((source) => {
        this.radioButtons.forEach((crbtn) => {
          crbtn.setChecked(crbtn === source.rbtn);
        });
        const newValue = source.rbtn.value === undefined ? source.idx : source.rbtn.value;
        this.updateValue(newValue, source.rbtn);
      });
    };

    listenChange();
    this.radioButtons.changes.subscribe((x) => {
      listenChange();
    });
  }

  ngOnDestroy() {
    this.dispose();
  }

  dispose() {
    this.checkedSubscription && this.checkedSubscription.unsubscribe();
  }

  updateRadioButtons() {
    if (this.radioButtons) {
      this.radioButtons.forEach((rbtn, idx) => {
        const value = rbtn.value === undefined ? idx : rbtn.value;
        rbtn.setChecked(this.value === value);
      });
    }
  }

    /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;
  writeValue(value: any): void {
    if (value !== this.value) {
      this.value = value;
    }
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
