import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[vcl-busy]',
  templateUrl: 'busy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusyComponent {
  @Input('vcl-busy')
  @HostBinding('class.vclLoadingLayerContainer')
  busy = false;

  @Input()
  busyLabel: string = null;
}
