import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  Inject,
  InjectionToken,
  Input,
  Optional,
  QueryList
} from '@angular/core';

import {GalleryImageComponent} from "./gallery-image.component";
import {AnimationBuilder, AnimationFactory, AnimationMetadata} from "@angular/animations";

export const GALLERY_ANIMATIONS = new InjectionToken('@ng-vcl/ng-vcl#gallery_animations');

export interface GalleryAnimationConfig {
  middleRefade?: AnimationMetadata | AnimationMetadata[];
  nextToMiddle?: AnimationMetadata | AnimationMetadata[];
  previousToMiddle?: AnimationMetadata | AnimationMetadata[];
}

export enum ImageChange {
  PREVIOUS,
  NEXT
}

@Component({
  selector: 'vcl-gallery',
  templateUrl: 'gallery.component.html',
  host: {
    '[attr.role]': '"gallery"',
  },
})
export class GalleryComponent implements AfterContentInit, AfterViewInit {

  @Input()
  selectedImage: number = 0;

  @Input()
  wrap: boolean = false;

  @ContentChildren(GalleryImageComponent)
  images: QueryList<GalleryImageComponent>;

  imageArray: GalleryImageComponent[];

  middleRefadeAnimationFactory: AnimationFactory | undefined;
  nextToMiddleAnimationFactory: AnimationFactory | undefined;
  previousToMiddleAnimationFactory: AnimationFactory | undefined;

  constructor(private builder: AnimationBuilder,
              @Optional() @Inject(GALLERY_ANIMATIONS) private animations: GalleryAnimationConfig) {
  }

  ngAfterViewInit() {
    if (this.animations) {
      if (this.animations.middleRefade) {
        this.middleRefadeAnimationFactory = this.builder.build(this.animations.middleRefade);
      }
      if (this.animations.nextToMiddle) {
        this.nextToMiddleAnimationFactory = this.builder.build(this.animations.nextToMiddle);
      }
      if (this.animations.previousToMiddle) {
        this.previousToMiddleAnimationFactory = this.builder.build(this.animations.previousToMiddle);
      }
    }
  }


  ngAfterContentInit() {
    this.imageArray = this.images.toArray();
  }

  selectImage(index: number): void {
    if (index !== undefined) {
      this.selectedImage = Math.max(0, Math.min(this.imageArray.length, index));
    }
  }

  nextImage(): number {
    let next = this.selectedImage + 1;

    if (!this.wrap) {
      next = Math.min(next, this.imageArray.length - 1);
    }

    if (next >= this.imageArray.length) {
      next = 0;
    }

    return next;
  }

  previousImage(): number {
    let previous = this.selectedImage - 1;

    if (!this.wrap) {
      previous = Math.max(previous, 0);
    }

    if (previous < 0) {
      previous = this.imageArray.length - 1;
    }

    return previous;
  }

  selectNext(): void {
    this.selectedImage = this.nextImage();
  }

  selectPrevious(): void {
    this.selectedImage = this.previousImage();
  }

}
