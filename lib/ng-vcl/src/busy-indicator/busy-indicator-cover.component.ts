import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[vcl-busy-indicator-cover]',
  templateUrl: 'busy-indicator-cover.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusyIndicatorCoverComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('vcl-busy-indicator-cover')
  @HostBinding('class.loading-layer-container')
  busy = false;
}
