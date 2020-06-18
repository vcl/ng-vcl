import { Component, HostBinding, OnDestroy, ChangeDetectionStrategy, AfterContentInit, ChangeDetectorRef, ContentChild, Input, forwardRef, Inject, Optional, ElementRef, ViewEncapsulation } from '@angular/core';
import { Subject, merge, NEVER } from 'rxjs';
import { FormControlGroupInputState, FORM_CONTROL_GROUP_INPUT_STATE, FormControlErrorStateAgent, FormControlGroupState, FORM_CONTROL_GROUP_STATE, FORM_CONTROL_GROUP_FORM_STATE, FormControlGroupFormState, FORM_CONTROL_GROUP_ERROR_STATE_AGENT_TOKEN } from './interfaces';
import { AbstractControl } from '@angular/forms';
import { defaultFormControlErrorStateAgent } from './error-state-agent';
import { FormDirective } from './form.directive';

@Component({
  selector: 'vcl-form-control-group',
  templateUrl: 'form-control-group.component.html',
  exportAs: 'vclFormControlGroup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['form-control-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: FORM_CONTROL_GROUP_STATE,
      useExisting: forwardRef(() => FormControlGroupComponent)
    }
  ]
})
export class FormControlGroupComponent<T> implements AfterContentInit, OnDestroy, FormControlGroupState<T> {

  constructor(
    private cdRef: ChangeDetectorRef,
    @Inject(FORM_CONTROL_GROUP_FORM_STATE)
    @Optional()
    form: FormControlGroupFormState,
    @Inject(FORM_CONTROL_GROUP_ERROR_STATE_AGENT_TOKEN)
    @Optional()
    private _errorStateAgent?: FormControlErrorStateAgent,
  ) { 
    this.form = form ?? new FormDirective(undefined, undefined);
  }

  form: FormControlGroupFormState;

  get isLabelClickable() {
    return !!this.input?.onLabelClick;
  }

  onLabelClick(event: Event): void {
    if (this.input?.onLabelClick) {
      this.input.onLabelClick(event);
    }
  }

  @Input('errorStateAgent')
  errorStateAgentInput: FormControlErrorStateAgent = undefined;

  get errorStateAgent() {
    return this.errorStateAgentInput ?? this._errorStateAgent ?? defaultFormControlErrorStateAgent;
  }

  @Input()
  hideRequiredIndicator = false;

  @HostBinding('class.form-control-group')
  hostClasses = true;

  private _stateChangedEmitter = new Subject<void>();

  stateChanged = this._stateChangedEmitter.asObservable();

  @HostBinding('class')
  get classAttribute(): string {
    return `form-control-group-${this.controlType}`;
  };

  controlType?: string;
  
  @HostBinding('class.disabled')
  isDisabled: boolean = false;

  @HostBinding('class.focused')
  isFocused: boolean = false;

  inputId?: string;

  @ContentChild(FORM_CONTROL_GROUP_INPUT_STATE as any)
  input: FormControlGroupInputState;

  get hasError() {
    const ngControl = this.input?.ngControl;
    const form = this.form;
    return (ngControl && form) ? this.errorStateAgent(form, ngControl) : false;
  }

  getError(errorCode: string, path?: string | (string | number)[]) {
    const ngControl = this.input?.ngControl;
    return ngControl?.getError(errorCode, path) ?? undefined;
  }

  private updateState() {
    this.controlType = this.input?.controlType ?? undefined;
    this.isFocused = this.input?.isFocused ?? false;
    this.isDisabled = this.input?.isDisabled ?? false;
    this.inputId = this.input?.elementId ?? undefined;
    this.input?.setErrorState(this.hasError);
  }

  get isRequired() {
    const control = this.input?.ngControl?.control;
    if (control && control.validator) {
      const validator = control.validator({} as AbstractControl)
      if (validator && validator.required) {
        return true;
      }
    }
    return false;
  }

  ngAfterContentInit() {
    this.updateState();
    // TODO: Add warning
    // if (!this.input) {
    // }
    merge(this.form.stateChanged, this.input?.stateChanged ?? NEVER).subscribe(() => {
      this.updateState();
      this._stateChangedEmitter.next();
      this.cdRef.markForCheck();
      this.cdRef.detectChanges();
    });
  }

  ngOnDestroy() {
    return this._stateChangedEmitter.complete();
  }
}
