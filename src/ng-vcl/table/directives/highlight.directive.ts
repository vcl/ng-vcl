/*
Cell and column highlighting

Single cells and columns can be highlighted by using the
vclCellHighlight class on each tdin the respective column or on single cells only.
*/

import { Directive, ElementRef, Renderer2, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[hightlight]',
})
export class HighlightDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {
    renderer.addClass(el.nativeElement, 'vclCellHighlight');
  }
}
