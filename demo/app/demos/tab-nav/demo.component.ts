import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLLabelDirective,
  VCLTabComponent,
  VCLTabNavComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLTabNavComponent, VCLTabComponent, VCLLabelDirective],
})
export class TabNavDemoComponent {
  tabIndex = 0;
}
