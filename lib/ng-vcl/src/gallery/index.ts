import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  GalleryComponent,
  GalleryAnimationConfig,
  GALLERY_ANIMATIONS,
} from './gallery.component';
import { GalleryImageComponent } from './gallery-image.component';
import { GalleryBodyComponent } from './gallery-body.component';
import { GalleryFooterComponent } from './gallery-footer.component';
import { GalleryThumbnailsComponent } from './gallery-thumbnails.component';
import { VCLButtonModule } from '../button/index';
import { VCLIconModule } from '../icon/index';

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
