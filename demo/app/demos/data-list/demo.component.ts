import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    templateUrl: 'demo.component.html',
    standalone: false
})
export class DataListDemoComponent {
  value1 = 'gr';
  value2 = ['fr'];
  value3 = undefined;
}
