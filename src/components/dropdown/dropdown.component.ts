import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { MetalistComponent } from '../metalist/metalist.component';

/**
*/

@Component({
  selector: 'vcl-dropdown',
  templateUrl: 'dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

  constructor() { }

  @Output()
  select = new EventEmitter<any[]>();

  @Input()
  items: any[];

  @Input()
  tabindex: number = 0;

  @Input()
  expanded: boolean = false;

  @Output()
  expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  maxSelectableItems: number = 1;

  @Input()
  minSelectableItems: number = 1;

  @Input()
  ariaRole: string = 'listbox';

  selectItem(item: any, meta, metalist: MetalistComponent) {
    if (this.maxSelectableItems === 1) {
      this.expanded = false;
      this.expandedChange.emit(this.expanded);
      metalist.selectItem(item);
    } else {
      if (meta.selected) {
        metalist.deSelectItem(item);
      } else {
        metalist.selectItem(item);
      }
    }
  }

  onSelect(selectedItems: any[]) {
    this.select.emit(selectedItems);
  }

  metaInformation: any = [];
}
