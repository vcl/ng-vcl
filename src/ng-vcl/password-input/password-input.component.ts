import { Directive, Input, Output, ElementRef, HostListener, EventEmitter, Component, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PasswordInputComponent),
  multi: true
};

@Component({
  templateUrl: 'password-input.component.html',
  selector: 'vcl-password-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  host: {
    '[class.vclInputGroup]': 'true',
    '[attr.tabindex]': '-1'
  }
})
export class PasswordInputComponent implements ControlValueAccessor {

  @Input()
  inputId: string | undefined;

  @Input()
  visibleIcon = 'fa:eye-slash';

  @Input()
  invisibleIcon = 'fa:eye';

  @Input()
  visible = false;

  @Input()
  disabled = false;

  @Input()
  selectOnFocus = false;

  @Input()
  tabindex = 0;

  @Input()
  placeholder = '';

  value = '';

  get buttonIcon() {
    return this.visible ? this.visibleIcon : this.invisibleIcon;
  }

  constructor(private cdRef: ChangeDetectorRef) { }

  toggle() {
    this.visible = !this.visible;
    this.cdRef.markForCheck();
  }

  onBlur() {
    this.onTouched();
  }

  onModelChange(value: any) {
    this.value = String(value);
    this.onChange(this.value);
  }

  /**
   * Things needed for ControlValueAccessor-Interface.
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};
  writeValue(value: any): void {
    this.value = (value === null || value === undefined) ? '' : String(value);
    this.cdRef.markForCheck();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.cdRef.markForCheck();
  }
}
