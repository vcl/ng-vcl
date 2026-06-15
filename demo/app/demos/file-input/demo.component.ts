import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VCLFileInputModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLFileInputModule],
})
export class FileInputDemoComponent {}
