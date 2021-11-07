import {AfterContentChecked, AfterViewInit, Component, ElementRef, Input, Optional, ViewChild, HostListener} from '@angular/core';
import {GalleryComponent} from './gallery.component';

@Component({
  selector: 'vcl-gallery-body',
  templateUrl: 'gallery-body.component.html',
  host: {'class': 'gallery-host'}
})
export class GalleryBodyComponent implements AfterContentChecked {

  @Input()
  target: GalleryComponent;

  @Input()
  wrapped: boolean;

  @ViewChild('imageContainer', { static: true })
  imageContainer: ElementRef;

  @ViewChild('galleryContent', { static: true })
  galleryContent: ElementRef;

  private initialized = false;
  private imgS: HTMLElement[];
  private imgContainers: HTMLElement[];
  private containerHeight = 0;
  private loadedCount = 0;
  private swipeCoord?: [number, number];
  private swipeTime?: number;

  constructor(@Optional() parent: GalleryComponent, private elementRef: ElementRef) {
    if (this.target == null) {
      this.target = parent;
    }
  }

  @HostListener('swipeleft')
  onSwipeLeft( ) {
    this.selectNext();
  }

  @HostListener('swiperight')
  onSwipeRight( ) {
    this.selectPrevious();
  }

  @HostListener('window:resize') function(){
    this.imageLoaded();
    this.ngAfterContentChecked();
  }

  ngAfterContentChecked() {
    if (!this.initialized) {
      const images = this.imageContainer.nativeElement.querySelectorAll('img');
      if (images.length === 0) {
        return;
      }
      this.initialized = true;
      this.imgS = Array.from(images);
    }
  }

  imageLoaded(): void {
    this.loadedCount++;
    console.log(this.wrapped);
    if (this.wrapped) {
      this.reloadWrapped();
    } else {
      this.reload();
    }
  }

  private reload(): void {
    let maxHeight = 0;
    let leftPos = 0;
    this.imgS.forEach((image, i) => {
      if (image.clientHeight > maxHeight) {
        maxHeight = image.clientHeight;
      }

      image.style.left = Math.round(leftPos) + 
      ((this.imageContainer.nativeElement.clientWidth - image.clientWidth)/2) + 
      'px';
      leftPos += this.imageContainer.nativeElement.clientWidth;
    });

    this.containerHeight = maxHeight;
  }

  private reloadWrapped(): void {

    let leftPos = 0;
    this.imgS.forEach((image, i) => {
      image.style.left = Math.round(leftPos) + 
      ((this.imageContainer.nativeElement.clientWidth - image.clientWidth)/2) + 
      'px';
      leftPos += this.imageContainer.nativeElement.clientWidth;
    });
    this.containerHeight = this.galleryContent.nativeElement.offsetHeight;
  }

  get translatePosition(): number {
    if (!this.imgS) {
      return 0;
    }

    let result = 0
    for (let i = 0; i < this.target.selectedImage; i++) {
      result -= this.imageContainer.nativeElement.clientWidth;
    }


    return result;
  }

  get imageContainerStyle(): object {
    return {
      height: this.containerHeight + 'px',
      transform: 'translateX(' + this.translatePosition + 'px)',
      transition: this.loadedCount === (this.target.images && this.target.images.length) ? 'transform 0.5s' : ''
    };
  }

  selectNext(): void {
    this.target.selectNext();
  }

  selectPrevious(): void {
    this.target.selectPrevious();
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000
        && Math.abs(direction[0]) > 30
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
          const swipe = direction[0] < 0 ? this.selectNext() : this.selectPrevious();
      }
    }
  }
}
