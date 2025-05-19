import { Component, ViewEncapsulation } from '@angular/core';
import { VCLIconModule, VCLPanelModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [VCLPanelModule, VCLIconModule],
})
export class PanelDemoComponent {
  constructor() {}
}
