import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sort-icon',
  template: `<div class="vclFloatRight vclIcon fa {{faIcon}}"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortIconComponent implements OnChanges {

  @Input() public sort: -1 | 0 | 1;
  private faIcon: 'fa-sort' | 'fa-sort-up' | 'fa-sort-down' = 'fa-sort';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.sort) {
      switch (this.sort) {
        case -1: {
          this.faIcon = 'fa-sort-down';
          break;
        }
        case 1: {
          this.faIcon = 'fa-sort-up';
          break;
        }
        case 0: {
          this.faIcon = 'fa-sort';
          break;
        }
        default: {
          console.error('Invalid sort value!');
        }
      }

    }
  }

}
