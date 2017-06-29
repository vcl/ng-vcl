import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, SimpleChanges, forwardRef, ChangeDetectorRef, HostListener, HostBinding } from '@angular/core';
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

  @ContentChildren(RadioButtonComponent)
  radioButtons: QueryList<RadioButtonComponent>;

  constructor(private cdRef: ChangeDetectorRef) { }

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
      this.cdRef.markForCheck();
    }
  }

  private triggerChange() {
    this.change.emit(this.value);
    this.onChange(this.value);
  }

  ngAfterContentInit() {
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
}
