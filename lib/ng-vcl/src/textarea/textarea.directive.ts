import { Directive, ElementRef, Input, HostBinding, HostListener, AfterViewInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { FormControlLabelMember } from '../form-control-label';

let UNIQUE_ID = 0;
@Directive({
  selector: 'textarea[vclInput]',
  host: {
    '[class.vclInput]': 'true',
  }
})
export class TextareaDirective implements AfterViewInit, OnChanges, DoCheck, FormControlLabelMember {

  constructor(private elRef: ElementRef<HTMLTextAreaElement>) { }

  private generatedId = 'vcl_input_' + UNIQUE_ID++;

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

  @HostListener('propertychange')
  @HostListener('input')
  onChange() {
    const value = this.elRef && this.elRef.nativeElement.value;
    this.setRows(value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('value' in changes) {
      this.setRows(changes.value.currentValue);
    }
  }

  ngDoCheck() {
    const value = this.elRef && this.elRef.nativeElement.value;
    this.setRows(value);
  }

  ngAfterViewInit() {
    const value = this.elRef && this.elRef.nativeElement.value;
    this.setRows(value);
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
    this.elRef.nativeElement.focus();
  }
}
