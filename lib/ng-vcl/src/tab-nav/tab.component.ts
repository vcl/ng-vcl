import { Component, ContentChild, ViewChild, Input, Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[vcl-tab-label]' })
export class TabLabelDirective { }

@Component({
  selector: 'vcl-tab',
  template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class TabComponent {
  @ContentChild(TabLabelDirective, { read: TemplateRef })
  label: TabLabelDirective;

  @ViewChild(TemplateRef)
  content: TemplateRef<any>;

  @Input()
  disabled = false;

  @Input()
  tabClass = '';
}
