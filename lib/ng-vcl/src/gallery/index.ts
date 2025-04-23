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
  imports: [
    GalleryComponent,
    GalleryImageComponent,
    GalleryBodyComponent,
    GalleryFooterComponent,
    GalleryThumbnailsComponent,
  ],
  exports: [
    GalleryComponent,
    GalleryImageComponent,
    GalleryBodyComponent,
    GalleryFooterComponent,
    GalleryThumbnailsComponent,
  ],
})
export class VCLGalleryModule {}
