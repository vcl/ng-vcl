import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FileInputComponent } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FileInputComponent],
})
export class FileInputDemoComponent {}
