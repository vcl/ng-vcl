import {
  Component,
  HostBinding,
  ContentChild,
  ElementRef,
  forwardRef,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  Optional,
  Self,
  SkipSelf,
  Input,
} from '@angular/core';
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

  @HostBinding('class.vclMaterial')
  get classVclMaterial() {
    return this.material === true || this.material === '';
  }

  @HostBinding('class.vclMaterialStatic')
  get classVclMaterialStatic() {
    return !this.input || !this.input.hasInputBox;
  }

  @HostBinding('class.vclPrependedLabel')
  get classVclPrependedLabel() {
    return this.input && this.input.hasPrependedLabel;
  }

  @HostBinding('class.vclInputFocused')
  get classVclInputFocused() {
    return this.input && this.input.isFocused;
  }

  @HostBinding('class.vclInputActive')
  get classVclInputActive() {
    if (!this.input) {
      return false;
    }

    if (this.input.value) {
      if (Array.isArray(this.input.value)) {
        return this.input.value.length > 0;
      }

      return true;
    }

    return false;
  }

  @Input()
  material: any = false;

  private _stateChangedEmitter = new Subject<void>();

  stateChange = this._stateChangedEmitter.asObservable();

  @ContentChild(FORM_CONTROL_INPUT as any, { read: FORM_CONTROL_INPUT })
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

  get isMaterial() {
    return this.material === true || this.material === '';
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
