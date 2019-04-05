import { Component, OnDestroy, ChangeDetectionStrategy, forwardRef, Input, ContentChildren, QueryList, HostBinding, AfterContentInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { RadioButtonComponent, RadioButton, RadioButtonObserver, RADIO_BUTTON_OBSERVER_TOKEN } from './radio-button.component';

export enum SelectionMode {
  Single,
  Multiple
}

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true
};

@Component({
  selector: 'vcl-radio-group',
  template: `<ng-content></ng-content>`,
  providers: [
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
    {
      provide: RADIO_BUTTON_OBSERVER_TOKEN,
      useExisting: forwardRef(() => RadioGroupComponent)
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioGroupComponent implements OnDestroy, AfterContentInit, ControlValueAccessor, RadioButtonObserver {
  private _disabled = false;

  @Input()
  value: any;

  @HostBinding('attr.role')
  attrRole = 'radiogroup';

  @ContentChildren(RadioButtonComponent, {
    descendants: true
  })
  radioButtons: QueryList<RadioButton>;

  @Input()
  set disabled(disabled: boolean) {
    this._disabled = disabled;
  }

  get isDisabled() {
    return this._disabled || this.formDisabled || this.disabled;
  }

  // Store form disabled state in an extra property to remember the old state after the radio group has been disabled
  private formDisabled = false;

  private radioButtonsSub?: Subscription;

  private syncRadioButtons() {
    if (!this.radioButtons) {
      return;
    }
    this.radioButtons.forEach((rbtn, idx) => {
      const value = rbtn.value === undefined ? idx : rbtn.value;
      rbtn.setChecked(this.value === value);
      rbtn.setDisabled(this.isDisabled);
    });
  }

  ngAfterContentInit() {
    // Syncs changed radio buttons checked state to be in line with the current group value
    this.radioButtonsSub = this.radioButtons.changes.pipe(startWith(null)).subscribe(() => {
      if (this.radioButtons) {
        this.syncRadioButtons();
      }
    });
  }

  notifyRadioButtonChecked(rb: RadioButton) {
    this.value = rb.value;
    this.syncRadioButtons();
    this.onChange(this.value);
    this.onTouched();
  }

  notifyRadioButtonBlur(rb: RadioButton) {
    if (this.radioButtons.last === rb) {
      this.onTouched();
    }
  }

  ngOnDestroy(): void {
    this.radioButtonsSub && this.radioButtonsSub.unsubscribe();
  }

  /**
  * things needed for ControlValueAccessor-Interface
  */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};
  writeValue(value: any): void {
    this.value = value;
    this.syncRadioButtons();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    this.formDisabled = disabled;
  }
}
