import { Component } from '@angular/core';
import { VCLTooltipModule } from '@vcl/ng-vcl';

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
  imports: [VCLTooltipModule],
})
export class ToolTipDemoComponent {}
