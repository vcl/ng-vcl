
import { Component, TemplateRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: '[vcl-metalist-item]',
  template: '<ng-content></ng-content>',
  exportAs: 'meta'
})
export class MetalistItem implements MetalistItem {
  @Input()
  value: any;

  @Input()
  metadata: any;

  @Input()
  disabled: boolean = false;

  @Input()
  marked: boolean = false;

  selected: boolean = false;
}
