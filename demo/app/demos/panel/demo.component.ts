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
    standalone: false
})
export class PanelDemoComponent {
  constructor() {}
}
