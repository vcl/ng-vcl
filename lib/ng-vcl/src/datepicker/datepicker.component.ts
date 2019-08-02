import {
  Component,
  Input,
  HostBinding,
  ViewChild,
  ElementRef,
  ContentChild,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  OnDestroy,
  ChangeDetectionStrategy,
  ViewContainerRef,
  TemplateRef,
  Injector,
  forwardRef,
  AfterContentInit,
  Optional,
  Inject,
  OnChanges,
  SimpleChanges} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription, Subject, merge } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Overlay } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { TemplatePortal } from '@angular/cdk/portal';
import { createOffClickStream } from '../off-click/index';
import { TemplateLayerRef, LayerConfig } from '../layer/index';
import { FORM_CONTROL_MATERIAL_INPUT, FormControlMaterialInput } from '../material-design-inputs/index';
import { FORM_CONTROL_INPUT, FORM_CONTROL_HOST, FormControlHost, FormControlErrorStateAgent, FORM_CONTROL_ERROR_STATE_AGENT } from '../form-control-group/index';
import { CalendarComponent } from '../calendar/index';
import { VCLDateRange, VCLDateAdapter } from '../core/index';
import { InputDirective } from '../input/index';
import { NgControl, ControlValueAccessor } from '@angular/forms';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-datepicker',
  templateUrl: 'datepicker.component.html',
  exportAs: 'vclDatepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: FORM_CONTROL_INPUT,
      useExisting: forwardRef(() => DatepickerComponent)
    },
    {
      provide: FORM_CONTROL_MATERIAL_INPUT,
      useExisting: forwardRef(() => DatepickerComponent)
    }
  ]
})
export class DatepickerComponent<VCLDate> extends TemplateLayerRef<any, VCLDate | VCLDateRange<VCLDate>> implements AfterContentInit, OnDestroy, FormControlMaterialInput, ControlValueAccessor, OnChanges {

  constructor(
    injector: Injector,
    private _dir: Directionality,
    private overlay: Overlay,
    protected viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef<HTMLElement>,
    private cdRef: ChangeDetectorRef,
    private dateAdapter: VCLDateAdapter<VCLDate>,
    @Optional()
    public ngControl?: NgControl,
    @Optional()
    @Inject(FORM_CONTROL_HOST)
    private formControlHost?: FormControlHost,
    @Inject(FORM_CONTROL_ERROR_STATE_AGENT)
    private _errorStateAgent?: FormControlErrorStateAgent,
  ) {
    super(injector);
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  private stateChangedEmitter = new Subject<void>();
  private _dropdownOpenedSub?: Subscription;
  private _valueChangeSub?: Subscription;
  private _disabled = false;
  private _cvaDisabled = false;

  private uniqueId = 'vcl_datepicker_' + UNIQUE_ID++;

  @ContentChild(CalendarComponent, { static: false })
  calendar: CalendarComponent<VCLDate>;

  @ViewChild('input', { read: InputDirective, static: true })
  input: InputDirective;

  @HostBinding('class.vclInputGroupEmb')
  _hostClasses = true;

  @ViewChild(TemplateRef, { static: true })
  templateRef: TemplateRef<any>;

  @Input()
  placeholder?: string;

  @Input()
  id?: string;

  @Input()
  value: VCLDate | undefined;

  @Output()
  valueChange = new EventEmitter<VCLDate>();

  @Output()
  afterClose = new EventEmitter<any | any[]>();

  @Input()
  errorStateAgent?: FormControlErrorStateAgent;

  get stateChanged() {
    return merge(this.input.stateChanged, this.stateChangedEmitter);
  }

  get isFocused() {
    return this.input.isFocused || this.isAttached;
  }

  get isDisabled() {
    return this._cvaDisabled || this._disabled;
  }

  get isLabelFloating() {
    return this.isAttached || this.input.isLabelFloating;
  }

  controlType = 'date-picker';
  materialModifierClass = undefined;

  get elementId() {
    return this.id || this.uniqueId;
  }

  get hasError() {
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
  }

  onFocus() {
    this.stateChangedEmitter.next();
  }

  onButtonClick() {
    this.calendar.setDate(this.value);
    this.toggle();
  }

  onBlur() {
    const date = this.dateAdapter.parse(this.input.value);
    this.propagateValueChange(date);
    this.valueChange.emit(date);
    this.onChange(date);
    this.onTouched();
    this.stateChangedEmitter.next();
    // TODO: Change detection is not triggered after blur event?
    this.cdRef.detectChanges();
  }

  private propagateValueChange(date: VCLDate | undefined) {
    if (this.calendar && this.isAttached) {
      this.calendar.setDate(date);
    }
    if (this.input) {
      if (date) {
        this.input.value = this.dateAdapter.format(date, 'input_date');
      } else {
        this.input.value = '';
      }
    }
    this.value = date;
  }

  createPortal() {
    return new TemplatePortal(this.templateRef, this.viewContainerRef);
  }

  protected getLayerConfig(): LayerConfig {
    return new LayerConfig({
      closeOnEscape: true,
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.reposition({
        autoClose: true
      }),
      direction: this._dir,
      panelClass: ['vclPopOver', 'vclDatePicker'],
      positionStrategy: this.overlay.position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }]).withPush(false)
    });
  }

  onLabelClick(event: Event): void {
    this.input.focus();
  }

  ngAfterContentInit(): void {
    this._valueChangeSub = this.calendar.dateChange.subscribe(() => {
      this.cdRef.markForCheck();
      this.stateChangedEmitter.next();
    });
  }

  protected afterAttached(): void {
    this.calendar.dateChange.pipe(
      takeUntil(this.afterClose)
    ).subscribe((value) => {
      if (this.isAttached) {
        this.close(value);
        this.stateChangedEmitter.next();
      }
      this.cdRef.markForCheck();
    });
    this.stateChangedEmitter.next();

    this._dropdownOpenedSub = createOffClickStream([this.overlayRef.overlayElement, this.elementRef.nativeElement], {
      document: this.injector.get(DOCUMENT)
    }).subscribe(() => {
      this.onTouched();
      this.close();
      this.stateChangedEmitter.next();
    });
  }

  protected afterDetached(date) {
    this._dropdownOpenedSub && this._dropdownOpenedSub.unsubscribe();
    if (date) {
      this.propagateValueChange(date);
      this.valueChange.emit(date);
      this.onChange(date);
    }
    this.afterClose.emit(date);
    if (!this.isDestroyed) {
      this.cdRef.markForCheck();
      this.cdRef.detectChanges();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      this.propagateValueChange(changes.value.currentValue);
    }
  }

  ngOnDestroy() {
    this._valueChangeSub && this._valueChangeSub.unsubscribe();
    this.destroy();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  onChange: (_: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(date: any): void {
    console.log(date);
    this.value = date;
    this.propagateValueChange(date);
    this.valueChange.emit(date);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._cvaDisabled = isDisabled;
  }
}
