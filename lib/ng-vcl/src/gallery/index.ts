import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {GalleryComponent, GalleryAnimationConfig, GALLERY_ANIMATIONS} from './gallery.component';
import {GalleryImageComponent} from './gallery-image.component';
import {GalleryBodyComponent} from './gallery-body.component';
import {GalleryFooterComponent} from './gallery-footer.component';
import {GalleryThumbnailsComponent} from './gallery-thumbnails.component';
import { VCLButtonModule } from '../button';
import { VCLIconModule } from '../icon';

export {GalleryAnimationConfig, GALLERY_ANIMATIONS};

@NgModule({
  imports: [CommonModule, VCLButtonModule, VCLIconModule],
  exports: [GalleryComponent, GalleryImageComponent, GalleryBodyComponent, GalleryFooterComponent, GalleryThumbnailsComponent],
  declarations: [GalleryComponent, GalleryImageComponent, GalleryBodyComponent, GalleryFooterComponent, GalleryThumbnailsComponent]
})
export class VCLGalleryModule {
}
