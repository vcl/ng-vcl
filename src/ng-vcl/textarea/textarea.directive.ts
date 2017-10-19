import { Directive, ElementRef, Input, HostBinding, HostListener, AfterContentInit, OnInit, Optional } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: 'textarea[vcl-textarea]',
  host: {
    '[class.vclInput]': 'true',
  }
})
export class TextareaDirective implements OnInit {

  constructor(@Optional() private model: NgModel, private elRef: ElementRef) { }

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

  ngOnInit() {
    if (this.autogrow && this.model && this.model.viewModel) {
      this.setRowsByValue(this.model.viewModel);
    }
  }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(value) {
    this.setRowsByValue(value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    if (this.selectAllOnFocus && this.elRef) {
      this.elRef.nativeElement.select();
    }
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
