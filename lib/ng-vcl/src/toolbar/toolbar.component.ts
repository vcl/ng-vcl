import { Component, Input } from '@angular/core';

@Component({
  selector: 'vcl-toolbar',
  template: '<ng-content></ng-content>',
  host: {
    '[class.vclToolbar]': 'true',
    '[class.vclLayoutHorizontal]': 'true',
    '[class.vclLayoutJustified]': 'true',
    '[class.vclSecondary]': 'ariaLevel == 2',
    '[attr.aria-level]': 'ariaLevel',
    '[attr.role]': '"menubar"',
  }
})
export class ToolbarComponent {

  constructor() { }

  @Input()
  ariaLevel = 1;
}
