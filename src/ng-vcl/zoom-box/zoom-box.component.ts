import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'vcl-zoom-box',
  templateUrl: 'zoom-box.component.html',
  host: {
    '[attr.role]': '"zoombox"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomBoxComponent {

  @Input()
  image: string;

  @Input()
  imageHighRes: string | null;

  @Input()
  highResScale: number;

  @Input()
  x: number = 0;

  @Input()
  y: number = 0;

  @Input()
  width: number;

  @Input()
  height: number;

  get zoomedSource(): string {
    if (this.imageHighRes) {
      return this.imageHighRes;
    }

    return this.image;
  }

  get zoomedX(): number {
    if (this.imageHighRes) {
      return this.x * this.highResScale;
    }

    return this.x;
  }

  get zoomedY(): number {
    if (this.imageHighRes) {
      return this.y * this.highResScale;
    }

    return this.y;
  }

  get zoomedWidth(): number {
    if (this.imageHighRes) {
      return this.width * this.highResScale;
    }

    return this.width;
  }

  get zoomedHeight(): number {
    if (this.imageHighRes) {
      return this.height * this.highResScale;
    }

    return this.height;
  }

}
