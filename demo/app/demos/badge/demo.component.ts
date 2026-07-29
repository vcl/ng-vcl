import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  VCLBadgeComponent,
  VCLBadgeRoundedDirective,
} from '../../../../lib/ng-vcl/src/badge/badge.component';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLBadgeComponent, VCLBadgeRoundedDirective],
})
export class BadgeDemoComponent {}
