import { Component, ChangeDetectionStrategy } from '@angular/core';

import { FileInputComponent } from '../../../../lib/ng-vcl/src/file-input/file-input.component';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FileInputComponent],
})
export class FileInputDemoComponent {}
