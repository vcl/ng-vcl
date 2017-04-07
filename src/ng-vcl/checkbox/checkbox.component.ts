import { Component,
  Input, Output, OnInit,
  HostBinding, HostListener,
  OnChanges, SimpleChanges, EventEmitter,
  ChangeDetectionStrategy, forwardRef, ElementRef
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
export class CheckboxComponent implements OnChanges, ControlValueAccessor {

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

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['checked']) {
      let checked = changes['checked'].currentValue;
      this.focusMaintenance(checked);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyup(ev) {
    switch (ev.code) {
      case 'Space':
        this.triggerChangeAction(ev);
        break;
    }
  }

  @HostListener('tap', ['$event'])
  onTap(e) {
    return this.triggerChangeAction(e);
  }

  triggerChangeAction(e) {
    e.preventDefault();
    if (this.disabled) return;
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
    this.onChangeCallback && this.onChangeCallback(this.checked);
  }

  focusMaintenance(checked: boolean) {
    if (this.checked === true && this.elementRef.nativeElement) {
      this.elementRef.nativeElement.focus();
    }
  }

  get icon() {
    return this.checked ? this.checkedIcon : this.uncheckedIcon;
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;
  writeValue(value: any): void {
    this.checked = !!value;
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
