import { Component, HostBinding, ContentChild, ElementRef, forwardRef, AfterViewInit, OnDestroy, ChangeDetectionStrategy, Optional, Self, SkipSelf } from '@angular/core';
import { FormControlInput, FORM_CONTROL_INPUT, FormControlHost, FORM_CONTROL_HOST } from './interfaces';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { NgForm, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'vcl-form-control-group, vcl-form-inline-control-group',
  templateUrl: 'form-control-group.component.html',
  exportAs: 'vclFormControlGroup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: FORM_CONTROL_HOST,
    useExisting: forwardRef(() => FormControlGroupComponent)
  }]
})
export class FormControlGroupComponent implements FormControlHost, AfterViewInit, OnDestroy {

  constructor(
    @Self()
    private elementRef: ElementRef<HTMLElement>,
    @Optional()
    @SkipSelf()
    private formGroup?: FormGroupDirective,
    @Optional()
    @SkipSelf()
    private ngForm?: NgForm
  ) { }

  @HostBinding('class.vclFormControlGroup')
  get classVclFormControlGroup() {
    return !this.classVclFormInlineControlGroup;
  }

  @HostBinding('class.vclFormInlineControlGroup')
  get classVclFormInlineControlGroup() {
    return this.elementRef.nativeElement.tagName.toLowerCase() === 'vcl-form-inline-control-group';
  }

  private _stateChangedEmitter = new Subject<void>();

  stateChange = this._stateChangedEmitter.asObservable();

  @ContentChild(FORM_CONTROL_INPUT as any, { read: FORM_CONTROL_INPUT, static: false })
  input?: FormControlInput;

  private get _form() {
    return this.ngForm || this.formGroup;
  }
  get pending() {
    return this._form.pending;
  }
  get invalid() {
    return this._form.invalid;
  }
  get valid() {
    return this._form.valid;
  }
  get touched() {
    return this._form.touched;
  }
  get untouched() {
    return this._form.untouched;
  }
  get submitted() {
    return this._form.submitted;
  }

  ngAfterViewInit() {
    if (this.input) {
      this.input.stateChanged.pipe(startWith(undefined)).subscribe(this._stateChangedEmitter);
    }
  }

  ngOnDestroy() {
    return this._stateChangedEmitter.complete();
  }
}
