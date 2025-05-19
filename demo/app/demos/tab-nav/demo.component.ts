import { Component } from '@angular/core';
import { VCLTabNavModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLTabNavModule],
})
export class TabNavDemoComponent {
  tabIndex = 0;
}
