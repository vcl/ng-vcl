import { Component, ChangeDetectionStrategy } from '@angular/core';

import { VCLTooltipDirective } from '../../../../lib/ng-vcl/src/tooltip/tooltip.directive';
import { PortalModule } from '@angular/cdk/portal';

@Component({
  templateUrl: './demo.component.html',
  styles: [
    `
      p {
        text-align: center;
        padding-top: 30px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLTooltipDirective, PortalModule],
})
export class ToolTipDemoComponent {}
