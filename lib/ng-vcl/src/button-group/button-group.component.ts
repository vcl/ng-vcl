import { Component, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter,
         forwardRef, ChangeDetectorRef, AfterContentInit, HostBinding, Optional, Inject, Self } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { BUTTON_OBSERVER_TOKEN, ButtonObserver, ButtonComponent } from '../button/index';
import { FormControlInput, FORM_CONTROL_INPUT, FORM_CONTROL_ERROR_STATE_AGENT, FormControlErrorStateAgent, FORM_CONTROL_HOST, FormControlHost } from '../form-control-group/index';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-button-group',
  template: `<ng-content select="button"></ng-content>`,
  providers: [
    {
      provide: BUTTON_OBSERVER_TOKEN,
      useExisting: forwardRef(() => ButtonGroupComponent)
    },
    {
      provide: FORM_CONTROL_INPUT,
      useExisting: forwardRef(() => ButtonGroupComponent)
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent implements OnDestroy, ControlValueAccessor, AfterContentInit, ButtonObserver, FormControlInput {

  constructor(
    private cdRef: ChangeDetectorRef,
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

  private buttonsSub?: Subscription;
  private _generatedId = 'vcl_button_group_' + UNIQUE_ID++;
  private stateChangeEmitter = new Subject<void>();

  stateChange = this.stateChangeEmitter.asObservable();
  controlType = 'button-group';

  @Input()
  id?: string;

  @Input()
  value: any | any[];

  @Output()
  valueChange = new EventEmitter<any | any[]>();

  @HostBinding('class.vclButtonGroup')
  _hostClasses = true;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this._generatedId;
  }

  @ContentChildren(ButtonComponent)
  buttons?: QueryList<ButtonComponent>;

  private _disabled = false;

  @Input()
  set disabled(disabled: boolean) {
    this._disabled = disabled;
    this.syncButtons();
    this.stateChangeEmitter.next();
  }

  get disabled(): boolean {
    return this._disabled;
  }

  // If `single`, a single item can be selected
  // If `multiple` multiple items can be selected
  @Input()
  selectionMode: 'multiple' | 'single' = 'single';

  formDisabled = false;

  @Input()
  errorStateAgent?: FormControlErrorStateAgent;

  @HostBinding('class.vclError')
  get hasError() {
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
  }

  get isDisabled(): boolean {
    return this.formDisabled || this.disabled;
  }

  get isFocused(): boolean {
    return this.buttons.some(b => b.isFocused);
  }

  private toggle(btn: ButtonComponent) {
    if (this.selectionMode === 'multiple') {
      if (Array.isArray(this.value)) {
        const selectedValue = this.value = [...this.value];
        const idx = this.value.indexOf(btn.value);

        if (idx >= 0) {
          selectedValue.splice(idx, 1);
          this.value = selectedValue;
        } else {
          this.value = [...this.value, btn.value];
        }
      } else {
        this.value = [btn.value];
      }
    } else {
      this.value = btn.value;
    }
  }

  private syncButtons() {
    const value = this.value;
    if (this.buttons && this.selectionMode === 'multiple' && Array.isArray(value)) {
      this.buttons.forEach((btn) => {
        btn.setSelected(value.includes(btn.value));
      });
    } else if (this.buttons && this.selectionMode === 'single') {
      this.buttons.forEach((btn) => {
        btn.setSelected(value === btn.value);
      });
    }
    if (this.buttons) {
      this.buttons.forEach((btn) => {
        btn.selectable = true;
        btn.setDisabled(this.isDisabled);
      });
    }
  }

  onLabelClick(event: Event): void {

  }

  notifyButtonClick(btn: ButtonComponent) {
    this.toggle(btn);
    this.syncButtons();
    this.triggerChange();
    this.onTouched();
  }

  notifyButtonBlur(btn: any) {
    if (this.buttons.last === btn) {
      this.onTouched();
    }
    this.stateChangeEmitter.next();
  }

  notifyButtonFocus(btn: any) {
    this.stateChangeEmitter.next();
  }


  private triggerChange() {
    this.valueChange.emit(this.value);
    this.onChange(this.value);
  }

  getError(error: string) {
    return this.hasError && this.ngControl.getError(error);
  }

  ngAfterContentInit() {
    // Syncs changed buttons checked state to be in line with the current group value
    // tslint:disable-next-line:deprecation
    this.buttonsSub = this.buttons.changes.pipe(startWith(null)).subscribe(() => {
      if (!this.buttons) {
        return;
      }
      this.syncButtons();
    });
  }

  ngOnDestroy() {
    this.buttonsSub && this.buttonsSub.unsubscribe();
    this.stateChangeEmitter && this.stateChangeEmitter.complete();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};
  writeValue(value: any): void {
    this.value = value;
    this.syncButtons();
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
