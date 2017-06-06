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
  EventEmitter, Output, HostListener,
  ComponentFactoryResolver, ViewContainerRef, ComponentRef
} from '@angular/core';
import { SortIconComponent } from '../components/sorticon.component';
import { TableService } from '../services/table.service';

@Directive({
  selector: '[sort]',
})
export class SortDirective implements OnInit {

  @Output() change: EventEmitter<-1 | 0 | 1> = new EventEmitter<-1 | 0 | 1>();

  isHeader: boolean = false;
  order: -1 | 0 | 1;
  sortIconComponent: SortIconComponent;
  tableService: TableService;

  constructor(private renderer: Renderer2,
    private el: ElementRef,
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
    this.tableService = new TableService(renderer, el);
    this.tableService.ClassToggle('vclSortableCol', true, 'th');
    this.tableService.ClassToggle('vclClearFix', true, 'th');
  }

  ngOnInit() {
   // const factory = this.resolver.resolveComponentFactory(SortIconComponent);
   // this.sortIconComponent = this.viewContainerRef.createComponent(factory).instance;
  }

  @HostListener('click')
  OnChangeOrder(): void {
    if (this.isHeader) {
      this.order = this.order == 1 ? -1 : 1;
      this.change.emit(this.order);
      switch (this.order) {
        case 1: {
          this.renderer.removeClass(this.el.nativeElement, 'vclClearFix');
          this.renderer.removeClass(this.el.nativeElement, 'vclSortDesc');
          this.renderer.addClass(this.el.nativeElement, 'vclSortAsc');
          this.sortIconComponent.sort = 1;
          break;
        }
        case -1: {
          this.renderer.removeClass(this.el.nativeElement, 'vclSortAsc');
          this.renderer.addClass(this.el.nativeElement, 'vclSortDesc');
          this.sortIconComponent.sort = -1;
          break;
        }
      }

    }
  }

}
