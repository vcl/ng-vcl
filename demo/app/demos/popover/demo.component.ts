import { Component } from '@angular/core';
import { VCLButtonModule, VCLPopoverModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLPopoverModule, VCLButtonModule],
})
export class PopoverDemoComponent {}
