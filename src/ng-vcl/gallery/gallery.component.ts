import {AfterContentInit, Component, ContentChildren, Input, QueryList} from '@angular/core';
import {GalleryImageComponent} from "./gallery-image.component";

@Component({
  selector: 'vcl-gallery',
  templateUrl: 'gallery.component.html',
  host: {
    '[attr.role]': '"gallery"',
  },
})
export class GalleryComponent implements AfterContentInit {

  @Input()
  selectedImage: number = 0;

  @Input()
  wrap: boolean = false;

  @ContentChildren(GalleryImageComponent)
  images: QueryList<GalleryImageComponent>;

  imageArray: GalleryImageComponent[];

  ngAfterContentInit() {
    this.imageArray = this.images.toArray();
  }

  selectImage(index: number): void {
    this.selectedImage = Math.max(0, Math.min(this.imageArray.length, index));
  }

  selectNext(): void {
    let selected = this.selectedImage + 1;

    if (!this.wrap) {
      selected = Math.min(selected, this.imageArray.length - 1);
    }

    if (selected >= this.imageArray.length) {
      selected = 0;
    }

    this.selectedImage = selected;
  }

  selectPrevious(): void {
    let selected = this.selectedImage - 1;

    if (!this.wrap) {
      selected = Math.max(selected, 0);
    }

    if (selected < 0) {
      selected = this.imageArray.length - 1;
    }

    this.selectedImage = selected;
  }

}
