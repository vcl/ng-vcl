import { Component } from '@angular/core';
import { VCLCheckboxComponent } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLCheckboxComponent],
})
export class CheckboxDemoComponent {
  value1 = false;
  value2 = false;
  value3 = false;
  value4 = false;
  value5 = false;
  value6 = false;
}
