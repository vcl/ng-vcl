import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  GalleryBodyComponent,
  GalleryComponent,
  GalleryFooterComponent,
  GalleryImageComponent,
  GalleryThumbnailsComponent,
} from '@vcl/ng-vcl';

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
