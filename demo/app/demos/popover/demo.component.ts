import { Component } from '@angular/core';
import { VCLButtonComponent, VCLPopoverDirective } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLPopoverDirective, VCLButtonComponent],
})
export class PopoverDemoComponent {}
