import { Directive, ElementRef, Input, HostBinding, HostListener, AfterViewInit, OnChanges, SimpleChanges, DoCheck, forwardRef, Optional, Inject, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormControlInput, FORM_CONTROL_INPUT, FORM_CONTROL_HOST, FormControlHost, FORM_CONTROL_ERROR_STATE_AGENT, FormControlErrorStateAgent } from '../form-control-group/index';
import { Subject } from 'rxjs';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';

let UNIQUE_ID = 0;
@Directive({
  selector: 'textarea[vclInput]',
  providers: [{
    provide: FORM_CONTROL_INPUT,
    useExisting: forwardRef(() => TextareaDirective)
  }]
})
export class TextareaDirective implements OnDestroy, AfterViewInit, OnChanges, DoCheck, FormControlInput {

  constructor(
    private elementRef: ElementRef<HTMLTextAreaElement>,
    private cdRef: ChangeDetectorRef,
    @Optional()
    public ngControl?: NgControl,
    @Optional()
    @Inject(FORM_CONTROL_HOST)
    private formControlHost?: FormControlHost,
    @Optional()
    @Inject(FORM_CONTROL_ERROR_STATE_AGENT)
    private _errorStateAgent?: FormControlErrorStateAgent,
  ) { }

  private stateChangeEmitter = new Subject<void>();
  private _focused = false;
  private generatedId = 'vcl_textarea_' + UNIQUE_ID++;

  controlType = 'textarea';
  stateChange = this.stateChangeEmitter.asObservable();

  @HostBinding('class.vclInput')
  classVclInput = true;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.disabled;
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

  @Input()
  errorStateAgent?: FormControlErrorStateAgent;

  get isFocused() {
    return this._focused;
  }

  get value() {
    return this.elementRef.nativeElement.value;
  }

  @HostBinding('class.vclError')
  get hasError() {
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
  }

  @HostListener('propertychange')
  @HostListener('input')
  onChange() {
    const value = this.elementRef && this.elementRef.nativeElement.value;
    this.setRows(value);
  }

  @HostListener('focus')
  onFocus() {
    this._focused = true;
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
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
    this.stateChangeEmitter && this.stateChangeEmitter.complete();
  }
}
