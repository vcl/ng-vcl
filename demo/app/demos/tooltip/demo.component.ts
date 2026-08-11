import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { VCLTooltipDirective } from '@vcl/ng-vcl';

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
