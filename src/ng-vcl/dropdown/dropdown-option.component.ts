
import { Component, TemplateRef, ViewChild, Input } from "@angular/core";

export interface DropdownItem {
  content?: TemplateRef<any>;
  label?: string;
  sublabel?: string;
  value?: any;
  class?: string;
  disabled?: boolean;
  marked?: boolean;
  selected?: boolean;
}

@Component({
  selector: 'vcl-dropdown-option',
  template: '<template><ng-content></ng-content></template>'
})
export class DropdownOptionComponent implements DropdownItem {

  @ViewChild(TemplateRef)
  content: TemplateRef<any>;

  @Input('value') value: any;
  @Input('sublabel') sublabel: string;
  @Input('label') label: string;
  @Input('class') class: string;
  @Input('disabled') disabled: boolean = false;
  @Input('marked') marked: boolean = false;
  @Input('selected') selected: boolean = false;

  create(idx: number) {
    return createItem(this, idx);
  }
}

export function createItem(item: DropdownItem, idx: number) {
  return {
    content: item.content,
    label: item.label,
    sublabel: item.sublabel,
    value: item.value !== undefined ? item.value : (item.label || idx),
    class: item.class,
    disabled: item.disabled,
    marked: item.marked,
    selected: item.selected
  };
}
