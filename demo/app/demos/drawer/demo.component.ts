import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  VCLButtonComponent,
  VCLDrawerComponent,
  VCLDrawerContainerComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    VCLButtonComponent,
    VCLDrawerContainerComponent,
    VCLDrawerComponent,
  ],
})
export class DrawerDemoComponent {
  opened = true;
}
