import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';

import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';

import { GalleryBodyComponent } from './gallery-body.component';
import { GalleryFooterComponent } from './gallery-footer.component';
import { GalleryImageComponent } from './gallery-image.component';
import { GalleryThumbnailsComponent } from './gallery-thumbnails.component';
import {
  GalleryComponent,
  GalleryAnimationConfig,
  GALLERY_ANIMATIONS,
} from './gallery.component';

export {
  GalleryAnimationConfig,
  GALLERY_ANIMATIONS,
  GalleryComponent,
  GalleryImageComponent,
  GalleryBodyComponent,
  GalleryFooterComponent,
  GalleryThumbnailsComponent,
};

@NgModule({
  imports: [CommonModule, NgOptimizedImage, VCLButtonModule, VCLIconModule],
  exports: [
    GalleryComponent,
    GalleryImageComponent,
    GalleryBodyComponent,
    GalleryFooterComponent,
    GalleryThumbnailsComponent,
  ],
  declarations: [
    GalleryComponent,
    GalleryImageComponent,
    GalleryBodyComponent,
    GalleryFooterComponent,
    GalleryThumbnailsComponent,
  ],
})
export class VCLGalleryModule {}
