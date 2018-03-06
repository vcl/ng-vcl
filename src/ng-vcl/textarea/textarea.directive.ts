import { Observable } from 'rxjs/Observable';
import { Directive, ElementRef, Input, HostBinding, HostListener, AfterViewInit, OnInit, Optional } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: 'textarea[vcl-textarea]',
  host: {
    '[class.vclInput]': 'true',
  }
})
export class TextareaDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) { }

  @Input()
  selectAllOnFocus = false;

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
    this.setRows();
  }

  ngAfterViewInit() {
    this.setRows();
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    if (this.selectAllOnFocus && this.elRef) {
      this.elRef.nativeElement.select();
    }
  }

  setRows() {
    const value = this.elRef && this.elRef.nativeElement.value;
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
}
