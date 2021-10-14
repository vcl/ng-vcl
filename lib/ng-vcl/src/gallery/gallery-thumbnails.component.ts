import {Component, forwardRef, Inject, Input, Optional} from '@angular/core';
import {GalleryComponent} from './gallery.component';

@Component({
  selector: 'vcl-gallery-thumbnails',
  templateUrl: 'gallery-thumbnails.component.html',
})
export class GalleryThumbnailsComponent {

  @Input()
  galleryTitle: string;
  @Input()
  alignment: string;

  @Input()
  target: GalleryComponent;

  constructor(@Optional() parent: GalleryComponent) {
    if (this.target == null) {
      this.target = parent;
    }
  }

}
