import { Component, ChangeDetectionStrategy } from '@angular/core';

import { VCLButtonGroupComponent } from '../../../../lib/ng-vcl/src/button-group/button-group.component';
import { VCLButtonComponent } from '../../../../lib/ng-vcl/src/button/button.component';
import { VCLIconModule } from '@vcl/ng-vcl';

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
