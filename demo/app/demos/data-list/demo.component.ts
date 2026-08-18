import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLBusyIndicatorComponent,
  VCLDataListComponent,
  VCLDataListHeaderDirective,
  VCLDataListItemDirective,
  VCLIconComponent,
} from '@vcl/ng-vcl';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgTemplateOutlet,
    VCLDataListComponent,
    VCLDataListHeaderDirective,
    VCLDataListItemDirective,
    VCLBusyIndicatorComponent,
    VCLIconComponent
  ],
})
export class DataListDemoComponent {
  value1 = 'gr';
  value2 = ['fr'];
  value3 = undefined;
}
