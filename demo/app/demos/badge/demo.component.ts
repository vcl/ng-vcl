import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VCLBadgeModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLBadgeModule],
})
export class BadgeDemoComponent {}
