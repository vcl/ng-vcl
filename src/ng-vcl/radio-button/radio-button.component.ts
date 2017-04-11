import {
  ChangeDetectionStrategy,
  Component,
  Input, Output,
  OnInit, HostBinding, HostListener, OnChanges,
  SimpleChanges, EventEmitter, ElementRef, forwardRef, ChangeDetectorRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButtonComponent),
  multi: true
};

@Component({
  selector: 'vcl-radio-button',
  templateUrl: 'radio-button.component.html',
  host: {
    '[attr.role]': '"radio"',
    '[class.vclRadioButton]': 'true',
    '[style.userSelect]': '"none"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class RadioButtonComponent implements ControlValueAccessor {

  @Input()
  checkedIcon = 'fa:dot-circle-o';

  @Input()
  uncheckedIcon = 'fa:circle-o';

  @HostBinding('attr.aria-disabled')
  @HostBinding('class.vclDisabled')
  @Input()
  disabled = false;

  @Input('value')
  value: any;

  @Input()
  labelPosition: 'left' | 'right' = 'right';

  @Input()
  label: string;

  @HostBinding()
  tabindex = 0;

  @HostBinding('attr.checked')
  @Input()
  checked: boolean = false;

  @Output()
  checkedChange = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef, private cdRef: ChangeDetectorRef) { }

  @HostListener('keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    switch (e.code) {
      case 'Space':
        this.triggerChangeAction(e);
        break;
    }
  }

  @HostListener('tap', ['$event'])
  onTap(e: Event) {
    return this.triggerChangeAction(e);
  }

  triggerChangeAction(e: Event) {
    e.preventDefault();
    if (this.disabled) return;
    if (this.checked == true) return; // radio-buttons cannot be 'unchecked' by definition

    this.checked = true;
    this.checkedChange.emit(this.checked);
    this.onChange(this.checked);
  }

  setChecked(value: boolean) {
    this.checked = value;
    this.cdRef.markForCheck();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(value: boolean): void {
    if (value !== this.checked) {
      this.checked = value;
    }
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
