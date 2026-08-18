import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VCLFileInputComponent } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLFileInputComponent],
})
export class FileInputDemoComponent {}
