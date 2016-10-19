import { Component, OnInit, Input, ChangeDetectionStrategy, HostBinding, ElementRef } from '@angular/core';

@Component({
  selector: 'vcl-icogram, [vcl-icogram]',
  host: {
    '[class.vclIcogram]': 'true',
    '[attr.role]': 'img'
  },
  templateUrl: 'icogram.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IcogramComponent {
  @Input() label: string;
  @Input() flexLabel: boolean;
  @Input() prepIcon: string;
  @Input() appIcon: string;
  @Input() prepIconSrc: string;
  @Input() appIconSrc: string;

  constructor(private elRef: ElementRef) { }
}
