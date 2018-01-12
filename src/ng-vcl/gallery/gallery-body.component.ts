import {AfterContentChecked, AfterViewInit, Component, ElementRef, Input, Optional, ViewChild} from '@angular/core';
import {GalleryComponent} from './gallery.component';
import Hammer from 'hammerjs';

@Component({
  selector: 'vcl-gallery-body',
  templateUrl: 'gallery-body.component.html',
})
export class GalleryBodyComponent implements AfterViewInit, AfterContentChecked {

  @Input()
  target: GalleryComponent;

  @ViewChild('imageContainer')
  imageContainer: ElementRef;

  private initialized: boolean = false;
  private imgS: Element[];
  private containerHeight = 0;
  private loadedCount = 0;

  constructor(@Optional() parent: GalleryComponent, private elementRef: ElementRef) {
    if (this.target == null) {
      this.target = parent;
    }
  }

  ngAfterViewInit() {
    const hammer = new Hammer(this.elementRef.nativeElement);
    hammer.get('swipe').set({enable: true, direction: Hammer.DIRECTION_HORIZONTAL});
    hammer.on('swipe', (ev) => {
      if (ev.direction == Hammer.DIRECTION_LEFT) {
        this.selectNext();
      } else if (ev.direction == Hammer.DIRECTION_RIGHT) {
        this.selectPrevious();
      }
    });
  }

  ngAfterContentChecked() {
    if (!this.initialized) {
      const images = this.imageContainer.nativeElement.querySelectorAll('img');

      if (images.length == 0) {
        return;
      }

      this.initialized = true;
      this.imgS = Array.from(images);
    }
  }

  imageLoaded(): void {
    this.loadedCount++;
    this.reload();
  }

  private reload(): void {
    let maxHeight = 0;
    let leftPos = 0;
    for (let i in this.imgS) {
      const image = this.imgS[i];
      if (image.clientHeight > maxHeight) {
        maxHeight = image.clientHeight;
      }

      image['style'].left = Math.round(leftPos) + 'px';
      leftPos += image.clientWidth;
    }

    this.containerHeight = maxHeight;
  }

  get translatePosition(): number {
    if (!this.imgS) {
      return 0;
    }

    let result = this.imageContainer.nativeElement.clientWidth / 2;
    for (let i = 0; i < this.target.selectedImage; i++) {
      result -= this.imgS['' + i].clientWidth;
    }

    result -= this.imgS['' + this.target.selectedImage].clientWidth / 2;

    return result;
  }

  get imageContainerStyle(): object {
    return {
      height: this.containerHeight + 'px',
      transform: 'translateX(' + this.translatePosition + 'px)',
      transition: this.loadedCount == this.target.images.length ? 'transform 0.5s' : ''
    };
  }

  selectNext(): void {
    this.target.selectNext();
  }

  selectPrevious(): void {
    this.target.selectPrevious();
  }

}
