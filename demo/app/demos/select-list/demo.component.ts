import { Component } from '@angular/core';
import { VCLIconModule, VCLSelectListModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLSelectListModule, VCLIconModule],
})
export class SelectListDemoComponent {
  value1 = 'gr';
  value2 = [];
  value3 = 'gr';
}
