import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: '[vclBusyIndicatorCover]',
  templateUrl: 'busy-indicator-cover.component.html'
})
export class BusyIndicatorCoverComponent {
  @Input('vclBusyIndicatorCover')
  @HostBinding('class.vclLoadingLayerContainer')
  busy = false;

  @Input()
  busyIndicatorType: 'straight' | 'circular' = 'circular';

  @Input()
  busyIndicatorDirection: 'vertical' | 'horizontal' = 'vertical';

  @Input()
  busyLabel: string | undefined;

  @Input()
  busyIconHeight = '3em';

  @Input()
  busyIconWidth = '3em';
}
