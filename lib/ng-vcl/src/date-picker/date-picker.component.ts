import { Directionality } from '@angular/cdk/bidi';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
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
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';
import { Subject } from 'rxjs';

import { VCLCalendarDateModifier } from '../calendar/index';
import {
  VCLDateRange,
  DateAdapterBase,
  DateAdapterBaseParseFormats,
  DateAdapterBaseDisplayFormats,
} from '../dateadapter/index';
import {
  FORM_CONTROL_GROUP_INPUT_STATE,
  FormControlGroupInputState,
} from '../form-control-group/index';
import {
  InputDirective,
  FORM_CONTROL_EMBEDDED_LABEL_INPUT,
  EmbeddedInputFieldLabelInput,
} from '../input/index';
import { TemplateLayerRef, LayerConfig } from '../layer/index';

let UNIQUE_ID = 0;

export type DatepickerPick = 'date' | 'month' | 'time';
export type DatepickerDisplay = 'date' | 'month' | 'time';

@Component({
  selector: 'vcl-date-picker',
  templateUrl: 'date-picker.component.html',
  exportAs: 'vclDatepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: FORM_CONTROL_EMBEDDED_LABEL_INPUT,
      useExisting: forwardRef(() => DatepickerComponent),
    },
    {
      provide: FORM_CONTROL_GROUP_INPUT_STATE,
      useExisting: forwardRef(() => DatepickerComponent),
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
  ],
  styleUrls: ['date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DatepickerComponent<VCLDate>
  extends TemplateLayerRef<any, VCLDate | VCLDateRange<VCLDate>>
  implements
    OnDestroy,
    ControlValueAccessor,
    OnChanges,
    AfterViewInit,
    FormControlGroupInputState,
    EmbeddedInputFieldLabelInput
{
  private stateChangedEmitter = new Subject<void>();
  private _cvaDisabled = false;

  private uniqueId = 'vcl_datepicker_' + UNIQUE_ID++;

  @ViewChild('input', { read: InputDirective, static: true })
  input: InputDirective;

  @HostBinding('class.input-field')
  _hostClasses = true;

  @ViewChild(TemplateRef, { static: true })
  templateRef: TemplateRef<any>;

  @ViewChild('calendarEl', { static: false, read: ElementRef })
  calendarEl: ElementRef;

  @Input()
  placeholder?: string;

  @Input()
  id?: string;

  @Input()
  disabled = false;

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
  pick: DateAdapterBaseParseFormats = 'date';

  @Input()
  displayFormat: DateAdapterBaseDisplayFormats = null;

  @Output()
  afterClose = new EventEmitter<any | any[]>();

  get stateChanged() {
    return this.stateChangedEmitter.asObservable();
  }

  get ngControl() {
    return this.injector.get(NgControl, null);
  }

  @HostBinding('class.focused')
  get isFocused() {
    return this.input.isFocused || this.isAttached;
  }

  get isLabelFloating() {
    return !this.isFocused && !this.dateAdapter.isDate(this.value);
  }

  @HostBinding('class.disabled')
  get isDisabled() {
    return this._cvaDisabled || this.disabled;
  }

  get parseFormat(): DateAdapterBaseParseFormats {
    if (this.pick === 'date') {
      return 'date';
    } else if (this.pick === 'month') {
      return 'month';
    } else if (this.pick === 'time') {
      return 'time';
    } else {
      throw new Error('Datepicker: Unsupported pick value: ' + this.pick);
    }
  }

  get displayFormatName(): DateAdapterBaseDisplayFormats {
    if (this.displayFormat) {
      return this.displayFormat;
    } else {
      return this.pick;
    }
  }

  controlType = 'date-picker';

  get elementId() {
    return this.id || this.uniqueId;
  }

  @HostBinding('class.error')
  hasError = false;

  constructor(
    injector: Injector,
    private _dir: Directionality,
    private overlay: Overlay,
    protected viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef<HTMLElement>,
    private cdRef: ChangeDetectorRef,
    private dateAdapter: DateAdapterBase<VCLDate>
  ) {
    super(injector);
  }

  ngAfterViewInit() {
    this.updateInput();
    this.subscriptions.sink = this.input.stateChanged.subscribe(
      this.stateChangedEmitter
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value && !changes.value.isFirstChange()) {
      this.updateInput();
    }
  }

  ngOnDestroy() {
    this.destroy();
    this.subscriptions?.unsubscribe();
  }

  setErrorState(error: boolean): void {
    this.hasError = error;
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
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

  protected createLayerConfig(...configs: LayerConfig[]): LayerConfig {
    return super.createLayerConfig(
      {
        closeOnEscape: true,
        hasBackdrop: true,
        closeOnBackdropClick: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
        scrollStrategy: this.overlay.scrollStrategies.reposition({
          autoClose: true,
        }),
        direction: this._dir,
        panelClass: ['pop-over', 'date-picker'],
        positionStrategy: this.overlay
          .position()
          .flexibleConnectedTo(this.elementRef)
          .withPositions([
            {
              originX: 'end',
              originY: 'bottom',
              overlayX: 'end',
              overlayY: 'top',
            },
            {
              originX: 'end',
              originY: 'top',
              overlayX: 'end',
              overlayY: 'bottom',
            },
          ])
          .withPush(false),
      },
      ...configs
    );
  }

  updateInput() {
    if (this.input && this.value) {
      this.input.value = this.dateAdapter.format(
        this.value,
        this.displayFormatName
      );
    } else if (this.input) {
      this.input.value = '';
    }
    this.stateChangedEmitter.next();
  }

  onLabelClick(_: Event): void {
    this.input.focus();
  }

  protected afterAttached(): void {
    this.subscriptions.sink = this.overlayRef.backdropClick().subscribe(() => {
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
    this.subscriptions.unsubscribe();
    this.afterClose.emit(date);
    if (!this.isDestroyed) {
      this.cdRef.markForCheck();
      this.cdRef.detectChanges();
    }
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  onChange: (_: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(date: VCLDate | null): void {
    this.value = date ?? undefined;
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

  checkClose(event: MouseEvent | TouchEvent) {
    if (event && event instanceof PointerEvent) {
      for (const target of event.composedPath()) {
        if (target === this.calendarEl.nativeElement) {
          // Do not close if event is inside the overlay
          return;
        }
      }
    }
    this.close();
  }
}
