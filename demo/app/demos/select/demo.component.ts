import { Component } from '@angular/core';
import {
  VCLFormControlGroupModule,
  VCLIconModule,
  VCLSelectListComponent,
  VCLSelectListHeaderComponent,
  VCLSelectListItemComponent,
  VCLSelectModule,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [
    VCLSelectModule,
    VCLIconModule,
    VCLFormControlGroupModule,
    VCLSelectListComponent,
    VCLSelectListHeaderComponent,
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
