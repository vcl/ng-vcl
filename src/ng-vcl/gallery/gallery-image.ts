import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'vcl-gallery-image',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryImageComponent {

  @Input()
  image: string;

  @Input()
  thumbnail: string = "";

  @Input()
  alt: string = "";

}
