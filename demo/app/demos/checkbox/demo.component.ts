import { Component } from '@angular/core';
import { VCLCheckboxModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLCheckboxModule],
})
export class CheckboxDemoComponent {
  value1 = false;
  value2 = false;
  value3 = false;
  value4 = false;
  value5 = false;
  value6 = false;
}
