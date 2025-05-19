import { Component } from '@angular/core';
import { VCLBusyIndicatorModule, VCLDataListModule } from '@vcl/ng-vcl';
import { DataListAddRemoveDemo } from './list-add-remove/data-list-add-remove-demo.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  templateUrl: 'demo.component.html',
  imports: [
    NgTemplateOutlet,
    VCLDataListModule,
    VCLBusyIndicatorModule,
    DataListAddRemoveDemo,
  ],
})
export class DataListDemoComponent {
  value1 = 'gr';
  value2 = ['fr'];
  value3 = undefined;
}
