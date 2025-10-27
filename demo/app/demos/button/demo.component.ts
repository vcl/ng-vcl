import { Component } from '@angular/core';
import { VCLButtonComponent, VCLIconComponent } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.scss'],
  imports: [VCLButtonComponent, VCLIconComponent],
})
export class ButtonDemoComponent {
  someAction(param) {
    console.log('Action handler, param:', param);
  }
}
