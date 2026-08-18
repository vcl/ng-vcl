import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLIconComponent,
  VCLLabelDirective,
  VCLSelectComponent,
  VCLSelectListComponent,
  VCLSelectListHeaderComponent,
  VCLSelectListItemComponent,
  VCLSubLabelDirective,
  VCLFormControlGroupComponent,
  EmbeddedInputFieldLabelDirective,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    VCLSubLabelDirective,
    VCLLabelDirective,
    VCLSelectComponent,
    VCLFormControlGroupComponent,
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
