import {
  Component,
  Input,
  ViewEncapsulation,
  ViewChild,
  TemplateRef,
} from '@angular/core';

@Component({
  templateUrl: 'demo.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class PanelDemoComponent {
  constructor() {}
}
