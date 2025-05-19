import { Component } from '@angular/core';
import { VCLButtonModule, VCLDrawerModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [VCLButtonModule, VCLDrawerModule],
})
export class DrawerDemoComponent {
  opened = true;
}
