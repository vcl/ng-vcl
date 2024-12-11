import { Component } from '@angular/core';

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
    standalone: false
})
export class ToolTipDemoComponent {}
