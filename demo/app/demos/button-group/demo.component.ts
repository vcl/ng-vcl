import { Component } from '@angular/core';
import { VCLButtonGroupModule, VCLButtonModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLButtonGroupModule, VCLButtonModule],
})
export class ButtonGroupDemoComponent {
  value1 = 2;
  value2 = 1;
  value3 = [];
}
