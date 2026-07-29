import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ZoomBoxComponent } from '../../../../lib/ng-vcl/src/zoom-box/zoom-box.component';
import { ZoomBoxMagnifierComponent } from '../../../../lib/ng-vcl/src/zoom-box/zoom-box-magnifier.component';
import { ZoomBoxContainerComponent } from '../../../../lib/ng-vcl/src/zoom-box/zoom-box-container.component';

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
