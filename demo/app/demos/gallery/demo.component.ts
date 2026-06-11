import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VCLGalleryModule } from '@vcl/ng-vcl';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VCLGalleryModule],
})
export class GalleryDemoComponent {}
