/*
Column sortability

Sortable columns are defined with the vclSortableCol class on the respective ths.
This class gives the whole header a pointer cursor on hover to indicate an action.
The application must register an appropriate event handler to change the sort order
for the whole th accordingly. Also an icon which indicates sortability should be
used as shown in the second column. The currently active sort order is indicated
by a respective icon and the classes vclSortAsc or vclSortDesc on the th element.
*/

import {
  Directive, ElementRef, Renderer2, AfterContentInit,
  EventEmitter, Output, HostListener
} from '@angular/core';

@Directive({
  selector: '[sort]',
})
export class SortDirective {

  @Output() change: EventEmitter<'asc' | 'desc'> = new EventEmitter<'asc' | 'desc'>();

  isHeader: boolean = false;
  order: 'asc' | 'desc';

  constructor(private renderer: Renderer2, private el: ElementRef) {
    if (this.isHeader = el.nativeElement.localName == "th") {
      renderer.addClass(el.nativeElement, 'vclSortableCol');
      renderer.addClass(el.nativeElement, 'vclClearFix');
    } else {
      console.error('Column sortability can be used only on table header!');
    }
  }

  @HostListener('click')
  OnChangeOrder(): void {
    if (this.isHeader) {
      this.order = this.order == 'asc' ? 'desc' : 'asc';
      this.change.emit(this.order);
      switch (this.order) {
        case 'asc': {
          this.renderer.removeClass(this.el.nativeElement, 'vclClearFix');
          this.renderer.removeClass(this.el.nativeElement, 'vclSortDesc');
          this.renderer.addClass(this.el.nativeElement, 'vclSortAsc');
          break;
        }
        case 'desc': {
          this.renderer.removeClass(this.el.nativeElement, 'vclSortAsc');
          this.renderer.addClass(this.el.nativeElement, 'vclSortDesc');
          break;
        }
      }
    }
  }

}
