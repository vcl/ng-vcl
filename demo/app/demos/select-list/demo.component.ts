import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VCLIconModule, VCLSubLabelDirective } from '@vcl/ng-vcl';
import { VCLSelectListComponent } from '../../../../lib/ng-vcl/src/select-list/select-list.component';
import { VCLSelectListHeaderComponent } from '../../../../lib/ng-vcl/src/select-list/components/select-list-header.component';
import { VCLSelectListItemComponent } from '../../../../lib/ng-vcl/src/select-list/components/select-list-item.component';

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
