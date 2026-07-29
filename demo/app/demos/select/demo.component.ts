import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLIconComponent,
  VCLLabelDirective,
  VCLSelectComponent,
  VCLSelectListComponent,
  VCLSelectListHeaderComponent,
  VCLSelectListItemComponent,
  VCLSubLabelDirective,
} from '@vcl/ng-vcl';
import { FormControlGroupComponent } from '../../../../lib/ng-vcl/src/form-control-group/form-control-group.component';
import { EmbeddedInputFieldLabelDirective } from '../../../../lib/ng-vcl/src/input/embedded-label.directive';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    VCLSubLabelDirective,
    VCLLabelDirective,
    VCLSelectComponent,
    FormControlGroupComponent,
    EmbeddedInputFieldLabelDirective,
    VCLSelectListComponent,
    VCLSelectListHeaderComponent,
    VCLIconComponent,
    VCLSelectListItemComponent,
  ],
})
export class SelectDemoComponent {
  value1 = undefined;
  value2 = [];
  value3 = undefined;
  value4 = undefined;
  search1 = '';
  value5 = undefined;
  search2 = '';
  value6 = undefined;
  value7 = undefined;
  search3 = '';
  value8 = undefined;
}
