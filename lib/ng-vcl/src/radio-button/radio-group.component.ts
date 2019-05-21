import { OnDestroy, forwardRef, Input, ContentChildren, QueryList, HostBinding, AfterContentInit, Optional, Inject, Self, EventEmitter, Output, Component } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { Subscription, Subject } from 'rxjs';
import { FormControlInput, FORM_CONTROL_INPUT, FORM_CONTROL_HOST, FormControlHost, FORM_CONTROL_ERROR_STATE_AGENT, FormControlErrorStateAgent } from '../form-control-group/index';
import { RadioButtonComponent } from './radio-button.component';
import { RADIO_BUTTON_GROUP_TOKEN, RadioButtonGroup, RadioButton } from './interfaces';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-radio-group',
  template: '<ng-content></ng-content>',
  providers: [
    {
      provide: RADIO_BUTTON_GROUP_TOKEN,
      useExisting: forwardRef(() => RadioGroupComponent)
    },
    {
      provide: FORM_CONTROL_INPUT,
      useExisting: forwardRef(() => RadioGroupComponent)
    }
  ]
})
export class RadioGroupComponent implements OnDestroy, AfterContentInit, ControlValueAccessor, RadioButtonGroup, FormControlInput {

  constructor(
    @Optional()
    @Self()
    public ngControl?: NgControl,
    @Optional()
    @Inject(FORM_CONTROL_HOST)
    private formControlHost?: FormControlHost,
    @Optional()
    @Inject(FORM_CONTROL_ERROR_STATE_AGENT)
    private _errorStateAgent?: FormControlErrorStateAgent,
  ) {
    // Set valueAccessor instead of providing it to avoid circular dependency of NgControl
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  private stateChangeEmitter = new Subject<void>();

  stateChange = this.stateChangeEmitter.asObservable();

  controlType = 'radio-group';

  private _disabled = false;

  private generatedId = 'vcl_radiogroup_' + UNIQUE_ID++;

  @Input()
  id?: string;

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

  @Input()
  errorStateAgent?: FormControlErrorStateAgent;

  @HostBinding('class.vclError')
  get hasError() {
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
  }

  @HostBinding('class.vclFormControlGroup')
  get classVclFormControlGroup() {
    return this.layout === 'vertical';
  }

  @HostBinding('class.vclFormInlineControlGroup')
  get classVclFormInlineControlGroup() {
    return this.layout === 'horizontal';
  }

  @HostBinding('attr.role')
  attrRole = 'radiogroup';

  @ContentChildren(RadioButtonComponent, {
    descendants: true
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
    this.radioButtonsSub = this.radioButtons.changes.pipe(startWith(null)).subscribe(() => {
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
    this.stateChangeEmitter.next();
  }

  notifyRadioButtonFocus(rb: RadioButton) {
    this.stateChangeEmitter.next();
  }

  onLabelClick(event: Event): void {

  }

  ngOnDestroy(): void {
    this.radioButtonsSub && this.radioButtonsSub.unsubscribe();
    this.stateChangeEmitter && this.stateChangeEmitter.complete();
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
