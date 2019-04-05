import { Component, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter,
         forwardRef, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { BUTTON_OBSERVER_TOKEN, ButtonObserver, ButtonComponent } from '../button';
import { VCLButton } from '../button';


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ButtonGroupComponent),
  multi: true
};

@Component({
  selector: 'vcl-button-group',
  host: {
    '[class.vclButtonGroup]': 'true',
  },
  template: `<ng-content select="button"></ng-content>`,
  providers: [
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
    {
      provide: BUTTON_OBSERVER_TOKEN,
      useExisting: forwardRef(() => ButtonGroupComponent)
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent implements OnDestroy, ControlValueAccessor, AfterContentInit, ButtonObserver {

  constructor(private cdRef: ChangeDetectorRef) { }

  private buttonsSub?: Subscription;

  @ContentChildren(ButtonComponent)
  buttons?: QueryList<VCLButton>;

  private _disabled = false;

  @Input()
  set disabled(disabled: boolean) {
    this._disabled = disabled;
    this.syncButtons();
  }

  get disabled() {
    return this._disabled;
  }

  // If `single`, a single item can be selected
  // If `multiple` multiple items can be selected
  @Input()
  mode: 'multiple' | 'single' = 'single';

  @Output()
  selectionChange = new EventEmitter<any | any[]>();

  formDisabled = false;

  selectedValue: any | any[];

  get isDisabled(): boolean {
    return this.formDisabled || this.disabled;
  }

  private toggle(btn: VCLButton) {
    if (this.mode === 'multiple') {
      if (Array.isArray(this.selectedValue)) {
        const selectedValue = this.selectedValue = [...this.selectedValue];
        const idx = this.selectedValue.indexOf(btn.value);

        if (idx >= 0) {
          selectedValue.splice(idx, 1);
          this.selectedValue = selectedValue;
        } else {
          this.selectedValue = [...this.selectedValue, btn.value];
        }
      } else {
        this.selectedValue = [btn.value];
      }
    } else {
      this.selectedValue = btn.value;
    }
  }

  private syncButtons() {
    const selectedValue = this.selectedValue;
    if (this.buttons && this.mode === 'multiple' && Array.isArray(selectedValue)) {
      this.buttons.forEach((btn) => {
        btn.setSelected(selectedValue.includes(btn.value));
      });
    } else if (this.buttons && this.mode === 'single') {
      this.buttons.forEach((btn) => {
        btn.setSelected(selectedValue === btn.value);
      });
    }
    if (this.buttons) {
      this.buttons.forEach((btn) => {
        btn.setDisabled(this.isDisabled);
      });
    }
  }

  notifyButtonClick(btn: VCLButton) {
    this.toggle(btn);
    this.syncButtons();
    this.triggerChange();
    this.onTouched();
  }

  notifyButtonBlur(btn: any) {
    if (this.buttons.last === btn) {
      this.onTouched();
    }
  }

  private triggerChange() {
    this.selectionChange.emit(this.selectedValue);
    this.onChange(this.selectedValue);
  }

  ngAfterContentInit() {
    // Syncs changed buttons checked state to be in line with the current group value
    this.buttonsSub = this.buttons.changes.pipe(startWith(null)).subscribe(() => {
      if (!this.buttons) {
        return;
      }
      this.syncButtons();
    });
  }

  ngOnDestroy() {
    this.buttonsSub && this.buttonsSub.unsubscribe();
  }

    /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};
  writeValue(value: any): void {
    this.selectedValue = value;
    this.syncButtons();
    this.cdRef.markForCheck();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    this.formDisabled = disabled;
    this.cdRef.markForCheck();
  }
}
