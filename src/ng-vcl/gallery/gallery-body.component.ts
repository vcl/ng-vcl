import {AfterViewInit, Component, ElementRef, Input, Optional, ViewChild} from '@angular/core';
import {GalleryComponent} from "./gallery.component";
import Hammer from 'hammerjs';
import {AnimationPlayer} from "@angular/animations";

@Component({
  selector: 'vcl-gallery-body',
  templateUrl: 'gallery-body.component.html',
})
export class GalleryBodyComponent implements AfterViewInit {

  @Input()
  target: GalleryComponent;

  @ViewChild("previousImage")
  previousImage: ElementRef;

  @ViewChild("nextImage")
  nextImage: ElementRef;

  @ViewChild("middleImage")
  middleImage: ElementRef;

  nextAnimation: AnimationPlayer | undefined;
  previousAnimation: AnimationPlayer | undefined;
  middleAnimation: AnimationPlayer | undefined;

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

  selectNext(): void {
    if (this.target.nextToMiddleAnimationFactory) {
      if (this.nextAnimation) {
        this.nextAnimation.finish();
      }

      if (this.middleAnimation) {
        this.middleAnimation.finish();
      }

      this.nextAnimation = this.target.nextToMiddleAnimationFactory.create(this.nextImage.nativeElement);
      this.nextAnimation.onDone(() => {
        this.target.selectNext();
        this.nextAnimation = undefined;
      });

      this.nextAnimation.play();

      if (this.target.middleRefadeAnimationFactory) {
        this.middleAnimation = this.target.middleRefadeAnimationFactory.create(this.middleImage.nativeElement);
        this.middleAnimation.play();
      }
    } else {
      this.target.selectNext();
    }
  }

  selectPrevious(): void {
    if (this.target.previousToMiddleAnimationFactory) {
      if (this.previousAnimation) {
        this.previousAnimation.finish();
      }

      if (this.middleAnimation) {
        this.middleAnimation.finish();
      }

      this.previousAnimation = this.target.previousToMiddleAnimationFactory.create(this.previousImage.nativeElement);
      this.previousAnimation.onDone(() => {
        this.target.selectPrevious();
        this.previousAnimation = undefined;
      });

      this.previousAnimation.play();

      if (this.target.middleRefadeAnimationFactory) {
        this.middleAnimation = this.target.middleRefadeAnimationFactory.create(this.middleImage.nativeElement);
        this.middleAnimation.play();
      }
    } else {
      this.target.selectPrevious();
    }
  }

}
