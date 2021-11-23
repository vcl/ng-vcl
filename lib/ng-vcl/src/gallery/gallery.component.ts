import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  Inject,
  InjectionToken,
  Input,
  Optional,
  QueryList,
  HostBinding,
  ElementRef,
  ViewChild,
  ContentChild,
} from '@angular/core';

import {GalleryImageComponent} from './gallery-image.component';
import {AnimationBuilder, AnimationFactory, AnimationMetadata} from '@angular/animations';
import {GalleryBodyComponent} from '../gallery/gallery-body.component';
import {GalleryThumbnailsComponent} from '../gallery/gallery-thumbnails.component';

export const GALLERY_ANIMATIONS = new InjectionToken('@vcl/ng-vcl#gallery_animations');

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
})
export class GalleryComponent implements AfterContentInit, AfterViewInit {

  @HostBinding('attr.role')
  _hostAttrRole = 'gallery';

  @Input()
  selectedImage = 0;

  @Input()
  wrap = false;

  @Input()
  row = false;

  @ContentChildren(GalleryImageComponent)
  images?: QueryList<GalleryImageComponent>;

  @ContentChild(GalleryThumbnailsComponent)
  galleryThumbnailsComponent: GalleryThumbnailsComponent;

  @ContentChild(GalleryBodyComponent)
  GalleryBodyComponent: GalleryBodyComponent;

  @ViewChild('galleryContainer', { static: true })
  galleryContainer: ElementRef;

  imageArray: GalleryImageComponent[];
  thumbnails: HTMLElement;
  thumbnailsContainer: HTMLElement;
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
    this.imageArray = this.images ? this.images.toArray() : [];

    let galleryBody = this.GalleryBodyComponent.elem.nativeElement;
    let galleryThumbnails = this.galleryThumbnailsComponent.elem.nativeElement;

    this.thumbnails = galleryThumbnails.querySelector('div.gallery-thumbs');
    this.thumbnailsContainer = galleryThumbnails.querySelector('div.gallery-thumbs-container');

    if (this.row) {
      galleryBody.classList = "";
      galleryBody.classList.add('gallery-body-row');

      this.thumbnails.classList.remove('gallery-thumbs');
      this.thumbnails.classList.add('gallery-thumbs-vertical');
      this.thumbnailsContainer.classList.remove('gallery-thumbs-container');
      this.thumbnailsContainer.classList.add('gallery-thumbs-container-vertical');
    }
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
