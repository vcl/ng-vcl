import { Component } from '@angular/core';
import {
  VCLButtonComponent,
  VCLDrawerComponent,
  VCLDrawerContainerComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  imports: [
    VCLButtonComponent,
    VCLDrawerContainerComponent,
    VCLDrawerComponent,
  ],
})
export class DrawerDemoComponent {
  opened = true;
}
