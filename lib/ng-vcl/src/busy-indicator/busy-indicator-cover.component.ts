import { NgIf } from '@angular/common';
import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[vcl-busy-indicator-cover]',
  templateUrl: 'busy-indicator-cover.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
})
export class BusyIndicatorCoverComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('vcl-busy-indicator-cover')
  @HostBinding('class.loading-layer-container')
  busy = false;
}
