/*
Row and cell selectability

Rows can be styled to suggest their selectability (single or multiple) using the vclRowSelectability modifier which makes rows show a pointer cursor on hover.
*/

import {
  Directive, Input, ElementRef, Renderer2,
  SimpleChanges, OnChanges
} from '@angular/core';

@Directive({
  selector: '[selected]'
})
export class SelectDirective implements OnChanges {
  @Input('selected') selected: boolean;
  isRow: boolean;
  constructor(private renderer: Renderer2, private el: ElementRef) {
    if (!(this.isRow = el.nativeElement.localName == "tr")) {
      console.error('table row can be marked as selected only for row (tr) element!');

    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.isRow) {
      if (this.selected) {
        this.renderer.addClass(this.el.nativeElement, 'vclSelected');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'vclSelected');
      }
    }
  }

}
