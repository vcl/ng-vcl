import { Component, OnInit, Input, ChangeDetectionStrategy, HostBinding, ElementRef, Directive, Inject, forwardRef, Self, Optional, ViewChild, SkipSelf } from '@angular/core';

@Component({
  selector: 'vcl-icogram, div[vcl-icogram]',
  host: {
    '[class.vclIcogram]': 'true',
    '[attr.role]': '"img"',
  },
  templateUrl: 'icogram.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IcogramComponent {
  @Input()
  label: string;

  @Input()
  prepIcon: string;

  @Input()
  appIcon: string;

  @Input()
  prepIconSrc: string;

  @Input()
  appIconSrc: string;
}

@Component({
  selector: 'span[vcl-icogram]',
  host: {
    '[class.vclIcogram]': 'true',
    '[attr.role]': '"img"',
  },
  templateUrl: 'icogram-span.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IcogramSpanComponent {
  @Input()
  label: string;

  @Input()
  prepIcon: string;

  @Input()
  appIcon: string;

  @Input()
  prepIconSrc: string;

  @Input()
  appIconSrc: string;
}
