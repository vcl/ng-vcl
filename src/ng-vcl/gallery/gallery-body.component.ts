import {AfterViewInit, Component, ElementRef, forwardRef, Inject, Input, Optional} from '@angular/core';
import {GalleryComponent} from "./gallery.component";
import Hammer from 'hammerjs';

@Component({
  selector: 'vcl-gallery-body',
  templateUrl: 'gallery-body.component.html',
})
export class GalleryBodyComponent implements AfterViewInit {

  @Input()
  target: GalleryComponent;

  constructor(@Optional() parent: GalleryComponent, private elementRef: ElementRef) {
    if (this.target == null) {
      this.target = parent;
    }
  }

  ngAfterViewInit() {
    const hammer = new Hammer(this.elementRef.nativeElement);
    hammer.get('swipe').set({ enable: true, direction: Hammer.DIRECTION_HORIZONTAL });
    hammer.on('swipe', (ev) => {
      if (ev.direction == Hammer.DIRECTION_LEFT) {
        this.target.selectNext();
      } else if (ev.direction == Hammer.DIRECTION_RIGHT) {
        this.target.selectPrevious();
      }
    });
  }

}
