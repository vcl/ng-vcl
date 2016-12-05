import { OnInit, Directive, Input, EventEmitter, Output, HostListener, ElementRef, HostBinding } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

@Directive({
  selector: '[vcl-textarea]',
  host: {
    '[class.vclInput]': 'true',
  }
})
export class TextareaDirective {

  constructor(private elRef: ElementRef, private ngModel: NgModel) { }

  @Input()
  selectAllOnFocus = false;

  @Input()
  autogrow = true;

  @Input()
  maxRows: number = null;

  @Input()
  minRows: number = null;

  @HostListener('ngModelChange', ['$event'])
  onModelChange(value) {
    this.setRowsByValue(value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    if (this.selectAllOnFocus) {
      if (this.elRef && this.elRef.nativeElement) {
        this.elRef.nativeElement.select();
      }
    }
  }

  @HostBinding('attr.rows')
  rows: number = null;

  ngOnInit() {
    this.setRowsByValue(this.ngModel.model);
  }

  setRowsByValue(value: string) {
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
