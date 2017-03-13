import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vcl-busy-indicator',
  templateUrl: 'busy-indicator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusyIndicatorComponent {
  @Input()
  type: 'straight' | 'circular' = 'circular';

  get indicatorClass() {
    return this.type === 'straight' ? 'vclBusy-busyIndStraight' : 'vclBusy-busyIndCircular';
  }
}
