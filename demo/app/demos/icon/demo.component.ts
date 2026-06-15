import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VCLIconComponent } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLIconComponent],
})
export class IconDemoComponent {}
