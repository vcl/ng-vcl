import {
  ChangeDetectionStrategy,
  Component,
  Input, Output,
  HostBinding, HostListener, EventEmitter, forwardRef, ChangeDetectorRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButtonComponent),
  multi: true
};

let uniqueID = 0;

@Component({
  selector: 'vcl-radio-button',
  templateUrl: 'radio-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  host: {
    '[style.display]': 'inline === true ? "inline-block" : null',
    '[class.vclInputControlGroup]': 'inline === false',
  },
})
export class RadioButtonComponent implements ControlValueAccessor {

  private uniqueID = `vcl-radio-button-${++uniqueID}`;

  @HostBinding('attr.id')
  @Input()
  id: string = this.uniqueID;

  @Input()
  checkedIcon = 'fas fa-dot-circle';

  @Input()
  uncheckedIcon = 'fas fa-circle';

  @Input()
  disabled = false;

  @Input()
  value: any;

  @Input()
  inline = false;

  @Input()
  iconPosition: 'left' | 'right' = 'left';

  @Input()
  label: string;

  @Input()
  tabindex = 0;

  @Input()
  checked = false;

  @Output()
  checkedChange = new EventEmitter<boolean>();

  @Output()
  focus  = new EventEmitter<boolean>();

  @Output()
  blur = new EventEmitter<boolean>();

  focused = true;

  get isDisabled() {
    return this.cvaDisabled || this.disabled;
  }

  get icon() {
    return this.checked ? this.checkedIcon : this.uncheckedIcon;
  }

  // Store cva disabled state in an extra property to remember the old state after the radio group has been disabled
  private cvaDisabled = false;
  constructor(private cdRef: ChangeDetectorRef) { }

  onKeyup(e: KeyboardEvent) {
    switch (e.code) {
      case 'Space':
        this.triggerChangeAction(e);
        break;
    }
  }

  @HostListener('tap', ['$event'])
  onTap(e: Event) {
    this.triggerChangeAction(e);
  }

  triggerChangeAction(e: Event) {
    e.preventDefault();
    if (this.isDisabled) {
      return;
    }

    // radio-buttons cannot be 'unchecked' by definition
    if (this.checked === true) {
      return;
    }

    this.checked = true;
    this.checkedChange.emit(this.checked);
    this.onChange(this.checked);
    this.onTouched();
  }

  setChecked(value: boolean) {
    this.checked = value;
    this.cdRef.markForCheck();
  }

  setInline(value: boolean) {
    this.inline = value;
    this.cdRef.markForCheck();
  }

  onFocus() {
    this.focused = true;
    this.focus.emit();
  }

  onBlur() {
    this.focused = false;
    this.blur.emit();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(value: boolean): void {
    if (value !== this.checked) {
      this.setChecked(!!value);
    }
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.cvaDisabled = isDisabled;
    this.cdRef.markForCheck();
  }
}
