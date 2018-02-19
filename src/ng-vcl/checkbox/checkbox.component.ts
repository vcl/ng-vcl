import { Component,
  Input, Output, OnInit,
  HostBinding, HostListener,
  OnChanges, SimpleChanges, EventEmitter,
  ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, ElementRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'vcl-checkbox, [vcl-checkbox]',
  templateUrl: 'checkbox.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.vclInputInlineControlGroup]': 'inline === true',
    '[class.vclInputControlGroup]': 'inline === false'
  }
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input()
  tabindex = 0;

  @Input()
  checkedIcon: string = 'fa:check-square-o';

  @Input()
  uncheckedIcon: string = 'fa:square-o';

  @Input()
  label?: string;

  @Input()
  disabled: boolean = false;

  @Input()
  inline: boolean = true;

  @Input()
  iconPosition: 'left' | 'right' = 'left';

  @Input()
  checked: boolean = false;

  /**
  Action fired when the `checked` state changes due to user interaction.
  */
  @Output()
  checkedChange = new EventEmitter<boolean>();

  constructor(private cdRef: ChangeDetectorRef) { }

  onKeyup(e) {
    switch (e.code) {
      case 'Space':
        e.preventDefault();
        this.updateValue();
        break;
    }
  }

  @HostListener('tap', ['$event'])
  onTap(e) {
    e.preventDefault();
    return this.updateValue();
  }

  updateValue() {
    if (this.isDisabled) {
      return;
    }
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
    this.onTouched();
    this.onChange(this.checked);
  }

  get icon() {
    return this.checked ? this.checkedIcon : this.uncheckedIcon;
  }

  get isDisabled() {
    return this.cvaDisabled || this.disabled;
  }

  onBlur(e) {
    this.onTouched();
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
  // Store cva disabled state in an extra property to remember the old state after the radio group has been disabled
  private cvaDisabled = false;
  setDisabledState(isDisabled: boolean) {
    this.cvaDisabled = isDisabled;
    this.cdRef.markForCheck();
  }
}
