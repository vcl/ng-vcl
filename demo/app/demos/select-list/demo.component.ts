import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLIconModule,
  VCLSubLabelDirective,
  VCLSelectListComponent,
  VCLSelectListHeaderComponent,
  VCLSelectListItemComponent,
} from '@vcl/ng-vcl';
@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    VCLSubLabelDirective,
    VCLSelectListComponent,
    VCLSelectListHeaderComponent,
    VCLSelectListItemComponent,
    VCLIconModule,
  ],
})
export class SelectListDemoComponent {
  value1 = 'gr';
  value2 = [];
  value3 = 'gr';
}
