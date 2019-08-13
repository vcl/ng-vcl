import {
  Component,
  Input,
  HostBinding,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  OnDestroy,
  ChangeDetectionStrategy,
  ViewContainerRef,
  TemplateRef,
  Injector,
  forwardRef,
  Optional,
  Inject,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  ViewEncapsulation} from '@angular/core';
import { Subscription, Subject, merge } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { TemplatePortal } from '@angular/cdk/portal';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { TemplateLayerRef, LayerConfig } from '../layer/index';
import { FORM_CONTROL_MATERIAL_INPUT, FormControlMaterialInput } from '../material-design-inputs/index';
import { FORM_CONTROL_INPUT, FORM_CONTROL_HOST, FormControlHost, FormControlErrorStateAgent, FORM_CONTROL_ERROR_STATE_AGENT } from '../form-control-group/index';
import { VCLDateRange, VCLDateAdapter, VCLDateAdapterParseFormats } from '../dateadapter/index';
import { InputDirective } from '../input/index';
import { VCLCalendarDateModifier } from '../calendar/index';

let UNIQUE_ID = 0;

export type DatepickerPick = 'date' | 'month' | 'time';

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
  ],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .vclPopOver.vclDatePicker > .vclCalendar {
      width: 100%
    }
  `]
})
export class DatepickerComponent<VCLDate> extends TemplateLayerRef<any, VCLDate | VCLDateRange<VCLDate>> implements OnDestroy, FormControlMaterialInput, ControlValueAccessor, OnChanges, AfterViewInit {

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

  @Input()
  showWeekOfTheYear?: boolean;

  @Input()
  dateModifier?: VCLCalendarDateModifier<VCLDate>[];

  @Output()
  valueChange = new EventEmitter<VCLDate>();

  @Input()
  viewDate?: VCLDate;

  @Input()
  pick: DatepickerPick = 'date';

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

  get parseFormat(): VCLDateAdapterParseFormats {
    if (this.pick === 'date') {
      return 'input_date';
    } else if (this.pick === 'month') {
      return 'input_month';
    } else if (this.pick === 'time') {
      return 'input_time';
    } else {
      throw new Error('Datepicker: Unsupported pick value: ' + this.pick);
    }
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
    this.toggle();
  }

  onBlur() {
    this.value = this.dateAdapter.parse(this.input.value, this.parseFormat);
    this.updateInput();
    this.valueChange.emit(this.value);
    this.onChange(this.value);
    this.onTouched();
    this.stateChangedEmitter.next();
    // TODO: Change detection is not triggered after blur event?
    this.cdRef.detectChanges();
  }

  createPortal() {
    return new TemplatePortal(this.templateRef, this.viewContainerRef);
  }

  protected getLayerConfig(): LayerConfig {
    return new LayerConfig({
      closeOnEscape: true,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
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

  ngAfterViewInit() {
    this.updateInput();
  }

  updateInput() {
    if (this.input && this.value) {
      this.input.value = this.dateAdapter.format(this.value, this.parseFormat);
    } else if (this.input) {
      this.input.value = '';
    }
  }

  onLabelClick(event: Event): void {
    this.input.focus();
  }

  protected afterAttached(): void {
    this.overlayRef.backdropClick().subscribe(() => {
      this.onTouched();
      this.stateChangedEmitter.next();
      this.close();
    });
  }

  onSelect(date: VCLDate) {
    this.value = date;
    this.updateInput();
    this.valueChange.emit(date);
    this.onChange(date);
    this.close();
  }

  protected afterDetached(date) {
    this._dropdownOpenedSub && this._dropdownOpenedSub.unsubscribe();
    this.afterClose.emit(date);
    if (!this.isDestroyed) {
      this.cdRef.markForCheck();
      this.cdRef.detectChanges();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value && !changes.value.isFirstChange()) {
      this.updateInput();
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
    this.value = date;
    this.updateInput();
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
