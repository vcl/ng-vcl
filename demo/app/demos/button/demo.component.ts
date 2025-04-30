import { Component } from '@angular/core';
import { VCLButtonModule, VCLIconModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.scss'],
  imports: [VCLButtonModule],
})
export class ButtonDemoComponent {
  someAction(param) {
    console.log('Action handler, param:', param);
  }
}
