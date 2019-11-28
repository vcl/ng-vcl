/* tslint:disable */
/*
Column width

The column width can be defined in the table header using one of
the layout spans vclSpan-5p - vclSpan-100p from the corresponding module.
*/

import { Directive, Input, ElementRef, Renderer2, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[span]',
})
export class SpanDirective implements AfterContentInit, OnChanges {
  @Input('span') width: number;

  constructor(private renderer: Renderer2, private el: ElementRef) { }


  ngOnChanges(changes: SimpleChanges) {
    if (changes.width) {
      this.ngAfterContentInit();
    }
  }

  ngAfterContentInit() {
    // Apply class only on header
    if (this.el.nativeElement.localName === 'th') {
      const vclSpan = `w-${this.width}p`;
      this.renderer.addClass(this.el.nativeElement, vclSpan);
    } else {
      throw new Error('Column width can be set only for header tag!');
    }
  }

}
