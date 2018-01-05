import {AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ContentChildren, ElementRef, Input, QueryList, ViewChild} from '@angular/core';
import {GalleryImageComponent} from "./gallery-image";
import Hammer from 'hammerjs';

@Component({
  selector: 'vcl-gallery',
  templateUrl: 'gallery.component.html',
  host: {
    '[attr.role]': '"gallery"',
  },
  changeDetection: ChangeDetectionStrategy.Default,
})
export class GalleryComponent implements AfterContentInit, AfterViewInit {

  @Input()
  galleryTitle: string;

  @Input()
  selectedImage: number = 0;

  @Input()
  wrap: boolean = false;

  @ContentChildren(GalleryImageComponent)
  images: QueryList<GalleryImageComponent>;

  @ViewChild('galleryContent')
  galleryContent: ElementRef;

  private imageArray: GalleryImageComponent[];

  ngAfterContentInit() {
    this.imageArray = this.images.toArray();
  }

  ngAfterViewInit() {
    const hammer = new Hammer(this.galleryContent.nativeElement);
    hammer.get('swipe').set({ enable: true, direction: Hammer.DIRECTION_HORIZONTAL });
    hammer.on('swipe', (ev) => {
      if (ev.direction == Hammer.DIRECTION_LEFT) {
        this.selectNext();
      } else if (ev.direction == Hammer.DIRECTION_RIGHT) {
        this.selectPrevious();
      }
    });
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
