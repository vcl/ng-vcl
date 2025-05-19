import {
  Directive,
  ElementRef,
  Input,
  HostBinding,
  HostListener,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  forwardRef,
  OnDestroy,
  Injector,
} from '@angular/core';
import { Subject } from 'rxjs';
import {
  FormControlGroupInputState,
  FORM_CONTROL_GROUP_INPUT_STATE,
} from '../form-control-group/index';
import { EmbeddedInputFieldLabelInput } from '../input';
import { NgControl } from '@angular/forms';

let UNIQUE_ID = 0;
@Directive({
  selector: 'textarea[vclInput]',
  providers: [
    {
      provide: FORM_CONTROL_GROUP_INPUT_STATE,
      useExisting: forwardRef(() => TextareaDirective),
    },
    // {
    //   provide: FORM_CONTROL_EMBEDDED_LABEL_INPUT,
    //   useExisting: forwardRef(() => TextareaDirective)
    // },
  ],
})
export class TextareaDirective
  implements
    OnDestroy,
    AfterViewInit,
    OnChanges,
    DoCheck,
    FormControlGroupInputState,
    EmbeddedInputFieldLabelInput
{
  constructor(
    public elementRef: ElementRef<HTMLTextAreaElement>,
    private injector: Injector
  ) {}

  private stateChangedEmitter = new Subject<void>();
  private _focused = false;
  private generatedId = 'vcl_textarea_' + UNIQUE_ID++;

  controlType = 'textarea';
  stateChanged = this.stateChangedEmitter.asObservable();

  @HostBinding('class.input')
  classVclInput = true;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.disabled;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.isDisabled ? true : null;
  }

  @Input()
  id?: string;

  @Input()
  disabled = false;

  @Input()
  autoselect = false;

  @Input()
  autogrow = false;

  @Input()
  maxRows: number | undefined;

  @Input()
  minRows: number | undefined;

  @HostBinding('attr.rows')
  @Input()
  rows: number;

  get isFocused() {
    return this._focused;
  }

  get isLabelFloating() {
    return !this.isFocused && this.value.length === 0;
  }

  get value() {
    return this.elementRef.nativeElement.value || '';
  }

  @HostBinding('class.error')
  hasError = false;

  setErrorState(error: boolean): void {
    this.hasError = error;
  }

  get ngControl() {
    return this.injector.get(NgControl, null);
  }

  @HostListener('ngModelChange')
  @HostListener('propertychange')
  @HostListener('input')
  onChange() {
    const value = this.elementRef && this.elementRef.nativeElement.value;
    this.setRows(value);
    this.stateChangedEmitter.next();
  }

  @HostListener('focus')
  onFocus() {
    this._focused = true;
    this.stateChangedEmitter.next();
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.stateChangedEmitter.next();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('value' in changes) {
      this.setRows(changes.value.currentValue);
    }
  }

  ngDoCheck() {
    const value = this.elementRef && this.elementRef.nativeElement.value;
    this.setRows(value);
  }

  ngAfterViewInit() {
    const value = this.elementRef && this.elementRef.nativeElement.value;
    this.setRows(value);
  }

  onLabelClick(event: Event): void {
    this.elementRef.nativeElement.focus();
  }

  setRows(value: string) {
    if (this.autogrow && typeof value === 'string') {
      const rows = value.split('\n').length + 1;
      if (typeof this.minRows === 'number' && rows < this.minRows) {
        this.rows = this.minRows;
      } else if (typeof this.maxRows === 'number' && rows > this.maxRows) {
        this.rows = this.maxRows;
      } else {
        this.rows = rows;
      }
    }
  }

  notifyFormControlLabelClick(event: Event): void {
    this.elementRef.nativeElement.focus();
  }

  ngOnDestroy() {
    this.stateChangedEmitter && this.stateChangedEmitter.complete();
  }
}
