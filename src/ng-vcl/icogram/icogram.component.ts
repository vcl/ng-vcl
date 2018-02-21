import { Component, OnInit, Input, ChangeDetectionStrategy, HostBinding, ElementRef } from '@angular/core';

@Component({
  selector: 'vcl-icogram, div[vcl-icogram], span[vcl-icogram]',
  host: {
    '[class.vclIcogram]': 'true',
    '[attr.role]': 'img',
  },
  templateUrl: 'icogram.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IcogramComponent {
  @Input() label: string;

  @HostBinding('class.vclHorizontal')
  @Input() flexLabel: boolean;

  @Input() flexLabelCentered: boolean;

  @Input() prepIcon: string;

  @Input() appIcon: string;

  @Input() prepIconSrc: string;

  @Input() appIconSrc: string;

  constructor(private elRef: ElementRef) { }

  @HostBinding('style.display')
  get block() {
    return (!this.span && !this.flexLabel) ? 'block' : null;
  }

  get span() {
    return this.elRef.nativeElement && this.elRef.nativeElement.tagName === 'SPAN';
  }

}
