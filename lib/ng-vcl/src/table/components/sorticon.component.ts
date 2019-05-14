/* tslint:disable */
import {Component, Input, ElementRef, Renderer2} from '@angular/core';


export type SortOptions = -1 | 0 | 1;
@Component({
  selector: 'sort-icon',
  template: `<ng-content></ng-content>`
})
export class SortIconComponent {

  @Input()
  public sort: SortOptions = 0;

  private rootElement: ElementRef;

  constructor(private e: ElementRef, private renderer: Renderer2) {
    this.rootElement = e;
    this.renderer.addClass(e.nativeElement, 'vclFloatRight');
    this.renderer.addClass(e.nativeElement, 'vclIcon');
    this.renderer.addClass(e.nativeElement, 'fa');
    this.ChangeSortOrder(this.sort);
  }

  public ChangeSortOrder(order: SortOptions): void {
    this.renderer.removeClass(this.rootElement.nativeElement, 'fa-sort');
    this.renderer.removeClass(this.rootElement.nativeElement, 'fa-sort-up');
    this.renderer.removeClass(this.rootElement.nativeElement, 'fa-sort-down');

    switch (order) {
      case 0: {
        this.renderer.addClass(this.rootElement.nativeElement, 'fa-sort-up');
        break;
      }
      case -1: {
        this.renderer.addClass(this.rootElement.nativeElement, 'fa-sort-down');
        break;
      }
      default: {
        this.renderer.addClass(this.rootElement.nativeElement, 'fa-sort');
        break;
      }
    }
  }

}
