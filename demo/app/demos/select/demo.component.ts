import { Component } from '@angular/core';
import {
  VCLFormControlGroupModule,
  VCLIconComponent,
  VCLInputModule,
  VCLSelectComponent,
  VCLSelectListComponent,
  VCLSelectListHeaderComponent,
  VCLSelectListItemComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [
    VCLSelectComponent,
    VCLFormControlGroupModule,
    VCLInputModule,
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
