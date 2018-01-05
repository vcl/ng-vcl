import { ChangeDetectionStrategy, Component, Input, HostBinding, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'vcl-zoom-box-magnifier',
  templateUrl: 'zoom-box-magnifier.component.html',
  host: {
    '[attr.role]': '"zoomboxmagnifier"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomBoxMagnifierComponent {

  @Input()
  image: string;

  @Input()
  x: number = 0;

  @Input()
  y: number = 0;

  @Input()
  width: number;

  @Input()
  height: number;

  private startX: number = -1;
  private startY: number = -1;

  @ViewChild('img')
  private imgContent: ElementRef;

  onMove(event: MouseEvent): void {
    if (this.startX == -1) {
      this.startX = this.x;
      this.startY = this.y;
    }

    const minX = this.width / 2;
    const maxX = this.imgContent.nativeElement.width - (this.width / 2);

    const minY = this.height / 2;
    const maxY = this.imgContent.nativeElement.height - (this.height / 2);

    this.x = Math.max(minX, Math.min(maxX, event.layerX)) - (this.width / 2);
    this.y = Math.max(minY, Math.min(maxY, event.layerY)) - (this.height / 2);
  }

  onOut(): void {
    this.x = this.startX;
    this.y = this.startY;
  }

}
