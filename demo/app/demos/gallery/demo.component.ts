import { Component, ChangeDetectionStrategy } from '@angular/core';

import { GalleryComponent } from '../../../../lib/ng-vcl/src/gallery/gallery.component';
import { GalleryImageComponent } from '../../../../lib/ng-vcl/src/gallery/gallery-image.component';
import { GalleryBodyComponent } from '../../../../lib/ng-vcl/src/gallery/gallery-body.component';
import { GalleryFooterComponent } from '../../../../lib/ng-vcl/src/gallery/gallery-footer.component';
import { GalleryThumbnailsComponent } from '../../../../lib/ng-vcl/src/gallery/gallery-thumbnails.component';

@Component({
  templateUrl: 'demo.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    GalleryComponent,
    GalleryImageComponent,
    GalleryBodyComponent,
    GalleryFooterComponent,
    GalleryThumbnailsComponent,
  ],
})
export class GalleryDemoComponent {}
