import { Component } from '@angular/core';
import {
  VCLIcogramComponent,
  VCLIcogramLinkComponent,
  VCLIconComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLIcogramComponent, VCLIconComponent, VCLIcogramLinkComponent],
})
export class IcogramDemoComponent {}
