import { Component,
  Input, Output, HostListener,
  EventEmitter,
  ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, HostBinding, Optional, Inject, InjectionToken} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FORM_CONTROL_LABEL_MEMBER_TOKEN, FormControlLabelMember } from '../form-control-label';
// import { RadioButtonParent, RADIO_BUTTON_PARENT_TOKEN } from './interfaces';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButtonComponent),
  multi: true
};


export interface RadioButton {
  readonly isDisabled: boolean;
  readonly value: any;
  setDisabled(disabled: boolean): void;
  setChecked(checked: boolean): void;
}

export interface RadioButtonObserver {
  notifyRadioButtonChecked(rb: RadioButton): void;
  notifyRadioButtonBlur(rb: RadioButton): void;
}

export const RADIO_BUTTON_OBSERVER_TOKEN = new InjectionToken<RadioButtonObserver>('vcl_radio_button_observer');


let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-radio-button',
  templateUrl: 'radio-button.component.html',
  providers: [
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
    {
      provide: FORM_CONTROL_LABEL_MEMBER_TOKEN,
      useExisting: forwardRef(() => RadioButtonComponent)
    },
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclCheckbox',
})
export class RadioButtonComponent implements ControlValueAccessor, FormControlLabelMember, RadioButton {

  constructor(
    private cdRef: ChangeDetectorRef,
    @Optional()
    @Inject(RADIO_BUTTON_OBSERVER_TOKEN)
    private radioButtonObserver: RadioButtonObserver
  ) { }

  private generatedId = 'vcl_radiobutton_' + UNIQUE_ID++;

  private _disabled = false;

  @Input()
  id?: string;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  @HostBinding('class.vclRadioButton')
  classVCLCheckbox = true;

  @HostBinding('attr.role')
  attrRole = 'radio';

  @HostBinding('attr.aria-checked')
  get attrAriaChecked() {
    return this.checked;
  }

  @HostBinding('attr.aria-disabled')
  get attrAriaDisabled() {
    return this.disabled;
  }

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this._disabled || this.formDisabled || this.disabled;
  }

  @HostBinding('attr.tabindex')
  @Input()
  tabindex = 0;

  @Input()
  disabled = false;

  @Input()
  checked = false;

  @Input()
  value: any;

  /**
  Action fired when the `checked` state changes due to user interaction.
  */
  @Output()
  checkedChange = new EventEmitter<boolean>();

  // Store form disabled state in an extra property to remember the old state after the radio group has been disabled
  private formDisabled = false;

  notifyFormControlLabelClick(event: Event): void {
    this.setCheckedUserInteraction();
  }

  @HostListener('keyup', ['$event'])
  onKeyup(e) {
    switch (e.code) {
      case 'Space':
        e.preventDefault();
        this.setCheckedUserInteraction();
        break;
    }
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    e.preventDefault();
    this.setCheckedUserInteraction();
  }

  @HostListener('blur', ['$event'])
  onBlur() {
    this.radioButtonObserver && this.radioButtonObserver.notifyRadioButtonBlur(this);
    this.onTouched();
  }

  private setCheckedUserInteraction() {
    if (this.isDisabled) {
      return;
    }

    this.radioButtonObserver && this.radioButtonObserver.notifyRadioButtonChecked(this);

    // radio-buttons cannot be 'unchecked' by definition from user interaction
    this.checked = true;
    this.cdRef.markForCheck();
    this.onTouched();
    this.onChange(this.checked);
    this.checkedChange.emit(this.checked);
  }

  setChecked(checked: boolean) {
    this.checked = checked;
    this.cdRef.markForCheck();
    this.onTouched();
    this.onChange(this.checked);
    this.checkedChange.emit(this.checked);
  }

  setDisabled(disabled: boolean): void {
    this._disabled = disabled;
    this.cdRef.markForCheck();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(value: boolean): void {
    this.checked = !!value;
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
