import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VCLZoomBoxModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLZoomBoxModule],
})
export class ZoomBoxDemoComponent {}
