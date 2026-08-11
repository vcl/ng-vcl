import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ZoomBoxComponent,
  ZoomBoxContainerComponent,
  ZoomBoxMagnifierComponent,
} from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    ZoomBoxComponent,
    ZoomBoxMagnifierComponent,
    ZoomBoxContainerComponent,
  ],
})
export class ZoomBoxDemoComponent {}
