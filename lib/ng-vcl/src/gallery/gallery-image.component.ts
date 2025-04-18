import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vcl-gallery-image',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class GalleryImageComponent {
  @Input({ required: true })
  image: string;

  @Input()
  thumbnail = '';

  @Input()
  alt = '';
}
