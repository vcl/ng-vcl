import { Component,
  Input, Output, HostListener,
  EventEmitter,
  ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FORM_CONTROL_LABEL_MEMBER_TOKEN,  FormControlLabelMember } from '../form-control-label';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-checkbox',
  templateUrl: 'checkbox.component.html',
  providers: [
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
    {
      provide: FORM_CONTROL_LABEL_MEMBER_TOKEN,
      useExisting: forwardRef(() => CheckboxComponent)
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclCheckbox',
})
export class CheckboxComponent implements ControlValueAccessor, FormControlLabelMember {

  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

  private generatedId = 'vcl_checkbox_' + UNIQUE_ID++;

  @Input()
  id?: string;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  @HostBinding('class.vclCheckbox')
  classVCLCheckbox = true;

  @HostBinding('attr.role')
  attrRole = 'checkbox';

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
    return this.formDisabled || this.disabled;
  }

  @HostBinding('attr.tabindex')
  @Input()
  tabindex = 0;

  @Input()
  disabled = false;

  @Input()
  checked = false;

  /**
  Action fired when the `checked` state changes due to user interaction.
  */
  @Output()
  checkedChange = new EventEmitter<boolean>();

  // Store form disabled state in an extra property to remember the old state after the radio group has been disabled
  private formDisabled = false;

  notifyFormControlLabelClick(event: Event): void {
    this.toggleValue();
  }

  @HostListener('keyup', ['$event'])
  onKeyup(e) {
    switch (e.code) {
      case 'Space':
        e.preventDefault();
        this.toggleValue();
        break;
    }
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    e.preventDefault();
    return this.toggleValue();
  }

  @HostListener('blur', ['$event'])
  onBlur() {
    this.onTouched();
  }

  toggleValue() {
    if (this.isDisabled) {
      return;
    }
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
    this.cdRef.markForCheck();
    this.onTouched();
    this.onChange(this.checked);
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(value: any): void {
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
