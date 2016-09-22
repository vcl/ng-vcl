import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

/**
*/

@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {

  ariaRole: string = 'list';

  @Output()
  select = new EventEmitter<any[]>();

  @Input()
  expanded: boolean = false;

  @Input()
  items: any[];

  @Input()
  minSelectableItems: number = 1;

  @Input()
  maxSelectableItems: number = 1;

  constructor() {}

  expand() {
    this.expanded = !this.expanded;
  }

  onSelect(items: any[]) {
    this.select.emit(items);
  }
}
