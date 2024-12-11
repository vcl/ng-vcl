import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  forwardRef,
  HostBinding,
  OnDestroy,
  Injector,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  FormControlGroupInputState,
  FORM_CONTROL_GROUP_INPUT_STATE,
} from '../form-control-group/index';
import { Subject } from 'rxjs';

let UNIQUE_ID = 0;

@Component({
    selector: 'vcl-checkbox',
    templateUrl: 'checkbox.component.html',
    providers: [
        {
            provide: FORM_CONTROL_GROUP_INPUT_STATE,
            useExisting: forwardRef(() => CheckboxComponent),
        },
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'vclCheckbox',
    standalone: false
})
export class CheckboxComponent
  implements
    OnDestroy,
    ControlValueAccessor,
    FormControlGroupInputState<boolean>
{
  constructor(private cdRef: ChangeDetectorRef, private injector: Injector) {}

  private stateChangedEmitter = new Subject<void>();

  stateChanged = this.stateChangedEmitter.asObservable();

  controlType = 'checkbox';

  private _focused = false;
  private generatedId = 'vcl_checkbox_' + UNIQUE_ID++;

  @Input()
  id?: string;

  get elementId() {
    return this.id || this.generatedId;
  }

  get isFocused() {
    return this._focused;
  }

  @HostBinding('class.checkbox')
  _hostClasses = true;

  @HostBinding('attr.role')
  attrRole = 'checkbox';

  @HostBinding('attr.aria-checked')
  get attrAriaChecked() {
    return this.checked;
  }

  @HostBinding('attr.aria-disabled')
  get attrAriaDisabled() {
    return this.isDisabled;
  }

  @HostBinding('attr.aria-labelledby')
  get attrAriaLabeledby() {
    return this.elementId;
  }

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.formDisabled || this.disabled;
  }

  @HostBinding('class.error')
  hasError = false;

  setErrorState(error: boolean): void {
    this.hasError = error;
  }

  get ngControl() {
    return this.injector.get(NgControl, null);
  }

  @Input()
  tabindex = 0;

  _disabled = false;

  @Input()
  set disabled(disabled: boolean) {
    this._disabled = disabled;
    this.stateChangedEmitter.next();
  }
  get disabled() {
    return this._disabled;
  }

  @Input()
  checked = false;

  @Output()
  checkedChange = new EventEmitter<boolean>();

  // Store form disabled state in an extra property to remember the old state after the radio group has been disabled
  private formDisabled = false;

  get value() {
    return this.checked;
  }

  onLabelClick(): void {
    this.toggleValue();
  }

  onKeyup(e) {
    switch (e.code) {
      case 'Space':
        e.preventDefault();
        this.toggleValue();
        break;
    }
  }

  onBlur() {
    this._focused = false;
    this.onTouched();
    this.stateChangedEmitter.next();
  }

  onFocus() {
    this._focused = true;
    this.stateChangedEmitter.next();
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
    this.stateChangedEmitter.next();
  }

  ngOnDestroy() {
    this.stateChangedEmitter && this.stateChangedEmitter.complete();
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
