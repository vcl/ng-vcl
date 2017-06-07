/*
Row hover highlighting

If a table row should be highlighted on hover, the vclRowHoverHighlight
modifier class can be used. This hovering's intention is just for the
sake of readability and should not indicate an action.
*/

import { Directive, ElementRef, Renderer2, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[hover]',
})
export class HoverDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {
    if (this.el.nativeElement.localName == "table") {
      renderer.addClass(el.nativeElement, 'vclRowHoverHighlight');
    } else {
      console.error('[hover] should be used for table tag only!');
    }
  }
}
