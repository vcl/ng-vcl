
import { Component, TemplateRef, ViewChild, Input } from "@angular/core";

export interface MetalistItem {
  value?: any;
  metadata?: any;
  disabled?: boolean;
  marked?: boolean;
  selected?: boolean;
}

@Component({
  selector: 'vcl-metalist-item',
  template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class MetalistItemComponent implements MetalistItem {

  @ViewChild(TemplateRef)
  _content: TemplateRef<any>;

  @Input()
  value: any;

  @Input()
  metadata: any;

  @Input()
  disabled: boolean = false;

  @Input()
  marked: boolean = false;

  @Input()
  selected: boolean = false;
}
