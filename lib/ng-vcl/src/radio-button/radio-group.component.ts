import {
  OnDestroy,
  forwardRef,
  Input,
  ContentChildren,
  QueryList,
  HostBinding,
  AfterContentInit,
  EventEmitter,
  Output,
  Component,
  Injector,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { Subscription, Subject } from 'rxjs';
import {
  FormControlGroupInputState,
  FORM_CONTROL_GROUP_INPUT_STATE,
} from '../form-control-group/index';
import { RadioButtonComponent } from './radio-button.component';
import {
  RADIO_BUTTON_GROUP_TOKEN,
  RadioButtonGroup,
  RadioButton,
} from './interfaces';

let UNIQUE_ID = 0;

@Component({
    selector: 'vcl-radio-group',
    template: '<ng-content></ng-content>',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioGroupComponent),
            multi: true,
        },
        {
            provide: RADIO_BUTTON_GROUP_TOKEN,
            useExisting: forwardRef(() => RadioGroupComponent),
        },
        {
            provide: FORM_CONTROL_GROUP_INPUT_STATE,
            useExisting: forwardRef(() => RadioGroupComponent),
        },
    ],
    standalone: false
})
export class RadioGroupComponent
  implements
    OnDestroy,
    AfterContentInit,
    ControlValueAccessor,
    RadioButtonGroup,
    FormControlGroupInputState
{
  constructor(private injector: Injector) {}

  private stateChangedEmitter = new Subject<void>();

  stateChanged = this.stateChangedEmitter.asObservable();

  controlType = 'radio-group';

  private _disabled = false;

  private generatedId = 'vcl_radiogroup_' + UNIQUE_ID++;

  @Input()
  id?: string;

  @HostBinding('class.radio-group')
  hostClasses = true;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  @Input()
  value: any;

  @Output()
  valueChange = new EventEmitter<any>();

  @Input()
  layout: 'horizontal' | 'vertical' = 'horizontal';

  @Input()
  set disabled(disabled: boolean) {
    this._disabled = disabled;
  }

  get ngControl() {
    return this.injector.get(NgControl, null);
  }

  @HostBinding('class.vertical')
  get classVertical() {
    return this.layout === 'vertical';
  }

  @HostBinding('attr.role')
  attrRole = 'radiogroup';

  @ContentChildren(RadioButtonComponent, {
    descendants: true,
  })
  radioButtons: QueryList<RadioButton>;

  get isDisabled() {
    return this._disabled || this.formDisabled || this.disabled;
  }

  get isFocused() {
    return this.radioButtons.some(rb => rb.isFocused);
  }

  // Store form disabled state in an extra property to remember the old state after the radio group has been disabled
  private formDisabled = false;

  private radioButtonsSub?: Subscription;

  @HostBinding('class.error')
  hasError = false;

  setErrorState(error: boolean): void {
    this.hasError = error;
  }

  private syncRadioButtons() {
    if (!this.radioButtons) {
      return;
    }
    this.radioButtons.forEach((rbtn, idx) => {
      const value = rbtn.value === undefined ? idx : rbtn.value;
      rbtn.setChecked(this.value === value);
      rbtn.setDisabled(this.isDisabled);
    });
  }

  ngAfterContentInit() {
    // Syncs changed radio buttons checked state to be in line with the current group value
    this.radioButtonsSub = this.radioButtons.changes
      .pipe(startWith(null))
      .subscribe(() => {
        if (this.radioButtons) {
          this.syncRadioButtons();
        }
      });
  }

  notifyRadioButtonChecked(rb: RadioButton) {
    this.value = rb.value;
    this.syncRadioButtons();
    this.valueChange.emit(this.value);
    this.onChange(this.value);
    this.onTouched();
  }

  notifyRadioButtonBlur(rb: RadioButton) {
    if (this.radioButtons.last === rb) {
      this.onTouched();
    }
    this.stateChangedEmitter.next();
  }

  notifyRadioButtonFocus(rb: RadioButton) {
    this.stateChangedEmitter.next();
  }

  ngOnDestroy(): void {
    this.radioButtonsSub && this.radioButtonsSub.unsubscribe();
    this.stateChangedEmitter && this.stateChangedEmitter.complete();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};
  writeValue(value: any): void {
    this.value = value;
    this.syncRadioButtons();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    this.formDisabled = disabled;
  }
}
