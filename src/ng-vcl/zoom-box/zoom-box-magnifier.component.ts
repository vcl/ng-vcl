import { ChangeDetectionStrategy, Component, Input, HostBinding } from '@angular/core';

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

}
