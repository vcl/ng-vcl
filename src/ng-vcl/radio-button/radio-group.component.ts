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

  rbtnSub: Subscription;
  rbSubs: Subscription[] = [];

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
        // else update value to match the selected raduo button
        const rbtn = this.radioButtons.find(((btn) => btn.checked));
        if (rbtn) {
          this.updateValue(rbtn && rbtn.value, rbtn);
        }
      }
    }

    // Subscribes to radio button change event
    const listenChange = () => {
      this.dispose();
      this.rbSubs = this.radioButtons.map((rbtn, idx) => rbtn.checkedChange.subscribe(() => {
        this.radioButtons.forEach((crbtn, idx) => {
          crbtn.setChecked(crbtn === rbtn);
        });

        this.updateValue(rbtn.value, rbtn);
      }));
    };

    listenChange();
    this.radioButtons.changes.subscribe((x) => {
      listenChange();
      // TODO: enable
      // Changes was triggered when updating radio buttons
      // inf runloop
      // setTimeout(_ => this.updateRadioButtons());
    });
  }

  ngOnDestroy() {
    this.dispose();
    this.rbtnSub && this.rbtnSub.unsubscribe();
  }

  dispose() {
    this.rbSubs.forEach(s => s.unsubscribe());
    this.rbSubs = [];
  }


  updateRadioButtons() {
    if (this.radioButtons) {
      this.radioButtons.forEach(rbtn => {
        rbtn.setChecked(this.value === rbtn.value);
      });
    }
  }

    /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;
  writeValue(value: any): void {
    console.log(value);
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
