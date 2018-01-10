import {NgModule} from "@angular/core";
import {style, animate} from '@angular/animations';
import {GalleryAnimationConfig, GALLERY_ANIMATIONS} from '@ng-vcl/ng-vcl';

export const GALLERY_ANIMATIONS_PROVIDER: GalleryAnimationConfig = {
  middleRefade: [
    style({opacity: 1}),
    animate("300ms ease-in-out", style({opacity: 0})),
    style({opacity: 1}),
  ],
  nextToMiddle: [
    style({opacity: 0, right: '-40%'}),
    animate("300ms ease-in-out", style({opacity: 1, right: 0})),
    style({opacity: 0})
  ],
  previousToMiddle: [
    style({opacity: 0, left: '-40%'}),
    animate("300ms ease-in-out", style({opacity: 1, left: 0})),
    style({opacity: 0})
  ]
};

@NgModule({
  providers: [{
    provide: GALLERY_ANIMATIONS,
    useValue: GALLERY_ANIMATIONS_PROVIDER
  }]
})
export class GalleryAnimationsModule {
}
