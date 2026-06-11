import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLBusyIndicatorComponent,
  VCLDataListComponent,
  VCLDataListHeaderDirective,
  VCLDataListItemDirective,
} from '@vcl/ng-vcl';
import { DataListAddRemoveDemo } from './list-add-remove/data-list-add-remove-demo.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgTemplateOutlet,
    VCLDataListComponent,
    VCLDataListHeaderDirective,
    VCLDataListItemDirective,
    DataListAddRemoveDemo,
    VCLBusyIndicatorComponent,
  ],
})
export class DataListDemoComponent {
  value1 = 'gr';
  value2 = ['fr'];
  value3 = undefined;
}
