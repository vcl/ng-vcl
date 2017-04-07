import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, SimpleChanges, forwardRef, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { RadioButtonComponent } from './radio-button.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

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
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent implements OnDestroy, ControlValueAccessor {

  checkedSubscription: Subscription | undefined;

  value: any;

  @Output()
  change = new EventEmitter<any>();

  updateValue(value: any) {
    this.value = value;
    this.onChangeCallback && this.onChangeCallback(this.value);
    this.change.emit(this.value);
  }

  @ContentChildren(RadioButtonComponent)
  radioButtons: QueryList<RadioButtonComponent>;

  private syncValue() {
    let value = undefined;
    this.radioButtons.toArray().every((rbtn, idx) => {
        if (rbtn.checked) {
          value = rbtn.value === undefined ? idx : rbtn.value;
          return false;
        }
        return !rbtn.checked;
    });
    this.value = value;
  }

  private syncRadioButtons() {
    if (this.radioButtons) {
      this.radioButtons.forEach((rbtn, idx) => {
        const value = rbtn.value === undefined ? idx : rbtn.value;
        rbtn.setChecked(this.value === value);
      });
    }
  }

  private triggerChange() {
    this.change.emit(this.value);
    !!this.onChangeCallback && this.onChangeCallback(this.value);
  }

  ngAfterContentInit() {
    // Update the value to match the selected radio buttons when not using ngModel
    if (!this.onChangeCallback) {
      this.triggerChange();
      this.syncValue();
    }

    // Subscribes to radio button change event
    const listenChange = () => {
      this.dispose();
      const checked$ = Observable.merge(...(this.radioButtons.map((rbtn, idx) => rbtn.checkedChange.map(() => ({rbtn, idx})))));

      this.checkedSubscription = checked$.subscribe((source) => {
        this.radioButtons.forEach((crbtn) => {
          crbtn.setChecked(crbtn === source.rbtn);
        });
        this.syncValue();
        this.triggerChange();
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

   /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;
  writeValue(value: any): void {
    this.value = value;
    this.syncRadioButtons();
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
