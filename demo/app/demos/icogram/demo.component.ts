import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLIcogramComponent,
  VCLIcogramLinkComponent,
  VCLIconComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLIcogramComponent, VCLIconComponent, VCLIcogramLinkComponent],
})
export class IcogramDemoComponent {}
