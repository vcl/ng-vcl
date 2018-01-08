import {Component, Input, Optional} from '@angular/core';
import {GalleryComponent} from "./gallery.component";

@Component({
  selector: 'vcl-gallery-header',
  templateUrl: 'gallery-header.component.html',
})
export class GalleryHeaderComponent {

  @Input()
  galleryTitle: string;

  @Input()
  target: GalleryComponent;

  constructor(@Optional() parent: GalleryComponent) {
    if (this.target == null) {
      this.target = parent;
    }
  }

}
