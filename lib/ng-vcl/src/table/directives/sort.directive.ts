/* tslint:disable */
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
  Directive, ElementRef, Renderer2, AfterContentInit, OnInit,
  EventEmitter, Output, HostListener, ContentChild
} from '@angular/core';
import { SortIconComponent } from '../components/sorticon.component';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[sort]',
  exportAs: 'sort-directive'
})
export class SortDirective {
  @ContentChild(SortIconComponent) sortIconComponent: SortIconComponent;
  @Output() change: EventEmitter<-1 | 0 | 1> = new EventEmitter<-1 | 0 | 1>();

  isHeader = false;
  order: -1 | 0 | 1;
  tableService: TableService;

  constructor(private renderer: Renderer2,
    private el: ElementRef) {
    this.tableService = new TableService(renderer, el);
    this.isHeader =
      this.tableService.ClassToggle('vclSortableCol', true, 'th') &&
      this.tableService.ClassToggle('vclClearFix', true, 'th');
  }

  @HostListener('click')
  OnChangeOrder(): void {
    if (this.isHeader) {
      this.order = this.order === 1 ? -1 : 1;
      this.change.emit(this.order);
      switch (this.order) {
        case 1: {
          this.renderer.removeClass(this.el.nativeElement, 'vclClearFix');
          this.renderer.removeClass(this.el.nativeElement, 'vclSortDesc');
          this.renderer.addClass(this.el.nativeElement, 'vclSortAsc');
          if (this.sortIconComponent) {
            this.sortIconComponent.ChangeSortOrder(1);
          }
          break;
        }
        case -1: {
          this.renderer.removeClass(this.el.nativeElement, 'vclSortAsc');
          this.renderer.addClass(this.el.nativeElement, 'vclSortDesc');
          if (this.sortIconComponent) {
            this.sortIconComponent.ChangeSortOrder(-1);
          }
          break;
        }
      }
    }
  }

}
