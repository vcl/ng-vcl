import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, SimpleChanges, forwardRef, ChangeDetectorRef, HostListener, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
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

  checkedSub: Subscription | undefined;
  blurSub: Subscription | undefined;

  value: any;

  @Output()
  change = new EventEmitter<any>();

  @ContentChildren(RadioButtonComponent)
  radioButtons: QueryList<RadioButtonComponent> | undefined;

  constructor(private cdRef: ChangeDetectorRef) { }

  private syncValue() {
    let value = undefined;
    if (this.radioButtons) {
      this.radioButtons.toArray().every((rbtn, idx) => {
          if (rbtn.checked) {
            value = rbtn.value === undefined ? idx : rbtn.value;
            return false;
          }
          return !rbtn.checked;
      });
      this.value = value;
    }
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
      if (this.radioButtons) {
        const checked$ = Observable.merge(...(this.radioButtons.map((rbtn, idx) => rbtn.checkedChange.map(() => ({rbtn, idx})))));

        this.blurSub = this.radioButtons.last.blur.subscribe(() => {
          this.onTouched();
        });

        this.checkedSub = checked$.subscribe((source) => {
          if (this.radioButtons) {
            this.radioButtons && this.radioButtons.forEach((crbtn) => {
              crbtn.setChecked(crbtn === source.rbtn);
            });
            this.syncValue();
            this.triggerChange();
          }
        });
      }
    };

    this.radioButtons && this.radioButtons.changes.startWith(null).subscribe(() => {
      listenChange();
    });
  }

  ngOnDestroy() {
    this.dispose();
  }

  dispose() {
    this.checkedSub && this.checkedSub.unsubscribe();
    this.blurSub && this.blurSub.unsubscribe();
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
  setDisabledState(isDisabled: boolean) {
    this.radioButtons && this.radioButtons.forEach(rb => rb.setDisabledState(isDisabled));
  }
}
