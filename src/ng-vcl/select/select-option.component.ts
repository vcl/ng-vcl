
import { Component, ViewChild, Input, TemplateRef } from "@angular/core";
import { DropdownItem, DropdownComponent, DropdownOptionComponent } from '../dropdown/index';

/**
 * see
 * @link http://www.w3schools.com/tags/tag_option.asp
 */
@Component({
  selector: 'vcl-select-option',
  template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class SelectOptionComponent extends DropdownOptionComponent {

  @ViewChild(TemplateRef)
  content: TemplateRef<any>;

  @Input('value') value: any;
  @Input('sublabel') sublabel: string;
  @Input('label') label: string;
  @Input('disabled') disabled: boolean = false;
  @Input('selected') selected: boolean = false;
}
