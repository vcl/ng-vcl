import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VCLIconModule, VCLSelectListModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLSelectListModule, VCLIconModule],
})
export class SelectListDemoComponent {
  value1 = 'gr';
  value2 = [];
  value3 = 'gr';
}
