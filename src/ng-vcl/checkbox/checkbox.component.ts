import { Component,
  Input, Output, OnInit,
  HostBinding, HostListener,
  OnChanges, SimpleChanges, EventEmitter,
  ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, ElementRef
} from '@angular/core';
import { trigger } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};

@Component({
  selector: 'vcl-checkbox',
  templateUrl: 'checkbox.component.html',
  animations: [trigger('checkState', [])],
  host: {
    '[attr.role]': '"checkbox"',
    '[class.vclCheckbox]': 'true',
    '[style.userSelect]': '"none"'
  },
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements ControlValueAccessor {

  @HostBinding()
  tabindex = 0;

  @Input()
  checkedIcon: string = 'fa:check-square-o';

  @Input()
  uncheckedIcon: string = 'fa:square-o';

  @HostBinding('attr.aria-disabled')
  @HostBinding('class.vclDisabled')
  @Input()
  disabled: boolean = false;

  @Input()
  labelPosition: 'left' | 'right' = 'right';

  /**
  Reflects the checked state, `true` is checked and `false` is unchecked
  @public
  */
  @HostBinding('attr.checked')
  @Input()
  checked: boolean = false;

  /**
  Action fired when the `checked` state changes due to user interaction.
  */
  @Output()
  checkedChange = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef, private cdRef: ChangeDetectorRef) { }

  @HostListener('keydown', ['$event'])
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
    if (this.disabled) {
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

  @HostListener('blur')
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
}
