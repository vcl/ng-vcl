
import { Component, TemplateRef, ViewChild, Input } from '@angular/core';
import { MetalistItem } from '../metalist/index';

@Component({
  selector: 'vcl-dropdown-option',
  template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class DropdownOption {

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

