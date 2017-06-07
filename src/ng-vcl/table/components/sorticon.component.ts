import {
  Component, Input, Inject, ChangeDetectionStrategy, SimpleChanges, ElementRef
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'sort-icon',
  template: `<div class="vclFloatRight vclIcon fa {{faIcon}}"></div>`
})
export class SortIconComponent {

  constructor( @Inject(DOCUMENT) private document: any,
    private element: ElementRef) { }
  @Input() public sort: -1 | 0 | 1;

  public faIcon: 'fa-sort' | 'fa-sort-up' | 'fa-sort-down' = 'fa-sort';

  public ChangeSortOrder(order: -1 | 0 | 1): void {
    switch (order) {
      case 1: {
        this.faIcon = 'fa-sort-up';
        break;
      }
      case -1: {
        this.faIcon = 'fa-sort-down';
        break;
      }
      default: {
        this.faIcon = 'fa-sort';
        break;
      }
    }
  }

}
