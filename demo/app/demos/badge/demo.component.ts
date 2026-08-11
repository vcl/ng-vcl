import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VCLBadgeComponent, VCLBadgeRoundedDirective } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLBadgeComponent, VCLBadgeRoundedDirective],
})
export class BadgeDemoComponent {}
