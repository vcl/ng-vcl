
import { Component, TemplateRef, ViewChild, Input } from "@angular/core";
import { MetalistItem } from "../metalist/index";

export interface DropdownItem extends MetalistItem {
  content?: TemplateRef<any>;
  label?: string;
  sublabel?: string;
  disabled?: boolean;
}

@Component({
  selector: 'vcl-dropdown-option',
  template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class DropdownOptionComponent implements DropdownItem {

  @ViewChild(TemplateRef)
  content: TemplateRef<any>;

  @Input()
  value: any;

  @Input()
  metadata: any;

  @Input()
  label: string;

  @Input()
  sublabel: string;

  @Input()
  disabled: boolean = false;

  @Input()
  selected: boolean = false;
}

