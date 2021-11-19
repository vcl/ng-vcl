import {AfterContentChecked, Component, ElementRef, forwardRef, Inject, Input, Optional, ViewChild} from '@angular/core';
import {GalleryComponent} from './gallery.component';

@Component({
  selector: 'vcl-gallery-thumbnails',
  templateUrl: 'gallery-thumbnails.component.html',
  host: {'class': 'gallery-thumbnails-host'}
})
export class GalleryThumbnailsComponent{

  @Input()
  galleryTitle: string;
  @Input()
  target: GalleryComponent;

  constructor(@Optional() parent: GalleryComponent, public elem: ElementRef) {
    if (this.target == null) {
      this.target = parent;
    }
  }
}
