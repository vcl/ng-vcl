import {
  Component,
  ElementRef,
  Input,
  Optional,
  ChangeDetectionStrategy,
} from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'vcl-gallery-thumbnails',
  templateUrl: 'gallery-thumbnails.component.html',
  host: { class: 'gallery-thumbnails-host' },
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgOptimizedImage, NgClass],
})
export class GalleryThumbnailsComponent {
  @Input()
  galleryTitle: string;
  @Input()
  target: GalleryComponent;

  constructor(
    @Optional() parent: GalleryComponent,
    public elem: ElementRef
  ) {
    if (this.target == null) {
      this.target = parent;
    }
  }
}
