
import { Component, TemplateRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'vcl-metalist-item',
  template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class MetalistItem implements MetalistItem {

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
