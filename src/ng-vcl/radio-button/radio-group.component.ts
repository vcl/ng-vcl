import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, SimpleChanges, forwardRef, ChangeDetectorRef, HostListener, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import { RadioButtonComponent } from './radio-button.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

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
  host: {
    'attr.role': '"radiogroup"'
  }
})
export class RadioGroupComponent implements OnDestroy, ControlValueAccessor {

  changesSub: Subscription | undefined;
  checkedSub: Subscription | undefined;
  blurSub: Subscription | undefined;

  value: any;

  @Input()
  layout: 'horizontal' | 'vertical' = 'horizontal';

  @Output()
  change = new EventEmitter<any>();

  @ContentChildren(RadioButtonComponent)
  radioButtons: QueryList<RadioButtonComponent> | undefined;

  @HostBinding('class.vclInputInlineControlGroup')
  get vclInputInlineControlGroup() {
    return this.layout === 'horizontal';
  }

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
    this.changesSub = this.radioButtons && this.radioButtons.changes.startWith(null).subscribe(() => {
      this.dispose();
      if (this.radioButtons) {
        // Sync inline property
        this.radioButtons && this.radioButtons.forEach((crbtn) => {
          crbtn.setInline(this.layout === 'horizontal');
        });

        // Subscribe last radio button to blur event
        this.blurSub = this.radioButtons.last.blur.subscribe(() => {
          this.onTouched();
        });

        // Subscribe to checked change event
        const checked$ = Observable.merge(...(this.radioButtons.map((rbtn, idx) => rbtn.checkedChange.map(() => rbtn))));
        this.checkedSub = checked$.subscribe((srcRBtn) => {
          if (this.radioButtons) {
            this.radioButtons && this.radioButtons.forEach((rBtn) => {
              rBtn.setChecked(rBtn === srcRBtn);
            });
            this.syncValue();
            this.triggerChange();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.dispose();
    this.changesSub && this.changesSub.unsubscribe();
  }

  dispose() {
    this.blurSub && this.blurSub.unsubscribe();
    this.checkedSub && this.checkedSub.unsubscribe();
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
