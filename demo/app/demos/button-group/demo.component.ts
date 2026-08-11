import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  VCLButtonComponent,
  VCLButtonGroupComponent,
  VCLIconModule,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLButtonGroupComponent, VCLButtonComponent, VCLIconModule],
})
export class ButtonGroupDemoComponent {
  value1 = 2;
  value2 = 1;
  value3 = [];
}
